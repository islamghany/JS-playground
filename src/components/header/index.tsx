import styled from "styled-components";
//import Button from "../button/";
import {
	useCode,
	update,
	updateStorage,
	useSyncCode,
	useListen,
} from "../../hooks/playground";
import * as esbuild from "esbuild-wasm";
import bundle from "../../bundle/index";
import { Setting , Close,Roller, Upload,Download } from "../../assets/icons";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import Toggle from "../toggle/index";
import { useQuery } from "react-query";
import Loader from "../loader"

const  Button = styled.button`
	  cursor: pointer;
		 padding: .6rem 1.6rem;
		 background: ${({ theme }) => theme.colors.primary};
		 font-size: 1.4rem;
		 color: #ffffff;
		 border: none;
		 outline: none;
		 border-radius: .4rem;
		 z-index: 109;
		 font-weight: bold;
		 outline:none;
		 transition:background .3s easy:
		 &:hover{
			 background:rgb(62, 85, 204)
		 }
`
const  IconButton = styled.button`
		display: flex;
		text-align: center;
		background: transparent;
		border-radius: 2px;
		padding: .6rem;
    margin-left: 16px;
		border:1px solid ${({ theme }) => theme.colors.bar};
		cursor:pointer;
		border-radius:.4rem;
		outline:none;
		font-size:2.4rem;
		svg{

			path, circle{
				stroke:${({ theme }) => theme.colors.mainText} !important;
			}
		}
`
const HeaderContainer = styled.header`
	display: flex;
	width: 100%;
	background: ${({ theme }) => theme.colors.bg};
	border-bottom:${({ theme }) => theme.colors.border};
	padding: 1rem 3rem;
	justify-content: space-between;
	align-items:center;
  .row{
		display:flex;
	}
`;

let timer;

const Run = () => {
	const { data } = useCode();
	const isSync = useListen("save");
	const mountRef = useRef<any>(null);
	const makeBundle = async () => {
		const output = await bundle(data);
		if (!output?.err) update("preview", output.code);
		update("error", output.err);
	};
	const onClick = async () => {
		 makeBundle();
	};
	const firstGlance = async ()=>{
		await makeBundle();
		update("loading",false)
	}
	useEffect(() => {
		if (!mountRef.current) {
			mountRef.current = true;
			firstGlance();
			return;
		}
		if (isSync.data === "off") return;
		if (timer) {
			clearTimeout(timer);
		}
		timer = setTimeout(async () => {
			makeBundle();
		}, 1000);
		return () => clearTimeout(timer);
	}, [data]);
	return <Button onClick={onClick}>Run</Button>;
};

const ModalContainer = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	z-index: 1000;
	background: rgba(0, 0, 0, 0.2);
	display: flex;
	justify-content: center;
	align-items: center;
	overflow: hidden;
`;
const ModalBody = styled(motion.div)`
	background: ${({ theme }) => theme.colors.bg};
	padding: 3rem;
	border-radius: 0.8rem;
	margin: 1.5rem;
	position: relative;
	max-width: 60rem;
		width: 100%;
	.modal {
		&__title {
			font-size:2.4rem;
			color:${({ theme }) => theme.colors.mainText};
			border-bottom:${({ theme }) => theme.colors.border};
		}
		&__body {
			margin: 2rem 0;
		}
		&__footer {
			display: flex;
			justify-content: flex-end;
		}
		&__close {
			position: absolute;
			top: 0;
			right: 0;
			width: 4rem;
			height: 4rem;
			display: flex;
			align-items: center;
			justify-content: center;
			cursor: pointer;
			z-index: 1;
			border-radius: 2rem;
			svg{
				path{
					fill: ${({ theme }) => theme.colors.primary};
				}
			}
		}
	}
	&.xsmall {
		max-width: 40rem;
		width: 100%;
	}
	&.small {
		max-width: 60rem;
		width: 100%;
	}
	&.medium {
		max-width: 80rem;
		width: 100%;
	}
	&.large {
		max-width: 96.8rem;
		width: 100%;
	}
`;

interface ModalProps {
	show: boolean;
	onHide: () => void;
}
interface RowProps {
	name;
}
const Row: React.FC<RowProps> = ({ name, children }) => {
	const { data } = useQuery(name, () => {}, {
		enabled: false,
		retry: false,
		staleTime: Infinity,
		cacheTime: Infinity,
	});
	const onCheck = (active: string) => {
		updateStorage(name, active);
	};
	return (
		<Toggle
			onCheck={onCheck}
			name={name}
			active={data === "on" ? true : false}
		>
			{children}
		</Toggle>
	);
};
const Modal: React.FC<ModalProps> = ({
	children,
	show = false,
	onHide = () => {},
}) => {
	return (
		<AnimatePresence>
			{show && (
				<ModalContainer
					onClick={onHide}
					className="modal__wrapper"
					initial={{ opacity: 0 }}
					animate={{
						opacity: 1,
					}}
					exit={{
						opacity: 0,
					}}
					transition={{ duration: 0.3 }}
				>
					<ModalBody
						initial={{
							scale: 0,
							opacity: 0,
						}}
						animate={{
							scale: 1,
							opacity: 1,
						}}
						exit={{
							scale: 0,
							opacity: 0,
						}}
						transition={{ duration: 0.3 }}
						onClick={(e) => {
							e.stopPropagation();
						}}
					>
						<div onClick={onHide} className="modal__close">
							<Close />
						</div>
						<div className="modal__title">Setting</div>
						<div className="modal__body">
							<Row name="theme">Activate the light theme</Row>
							<Row name="save">Saving while typing</Row>
							<Row name="minimap">Show Mini map</Row>
						</div>
					</ModalBody>
				</ModalContainer>
			)}
		</AnimatePresence>
	);
};
const Options = () => {
	const [show, setShow] = useState(false);
	const onHide = () => setShow(false);
	const onShow = () => setShow(true);
	return (
		<>
			<IconButton Title="Settings" onClick={onShow}>
				<Setting />
			</IconButton>
			<Modal show={show} onHide={onHide} />
		</>
	);
};
const Header = () => {
	return (
		<HeaderContainer>
			<div className="row">
            <Run />
						<IconButton title="Beatify Code">
							<Roller />
						</IconButton>
						<IconButton title="Download">
							<Download />
						</IconButton>
						<IconButton title="Upload Code">
							<Upload />
						</IconButton>
			</div>
			<Options />
		</HeaderContainer>
	);
};
export default Header;
