import styled,{keyframes} from 'styled-components';
import {useLoading} from '../../hooks/playground'
const rotate = keyframes`
0% {
  transform: rotate(30deg);
}
16% {
  transform: rotate(90deg);
}
32% {
  transform: rotate(150deg);
}
48% {
  transform: rotate(210deg);
}
64% {
  transform: rotate(270deg);
}
82% {
  transform: rotate(330deg);
}
100% {
  transform: rotate(390deg);
}
`
const Container = styled.div`
.modal{
  background:${({theme})=>theme.colors.bg};

      position: absolute;
      height: 100vh;
      top: 0;
      left:0;
      right: 0;
      bottom: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 1000;
      h5{
        margin-top: 20px;
        color:${({theme})=>theme.colors.mainText};
      }
      &__container{

        background:${({theme})=>theme.colors.bg};
        width: 200px;
        min-height:150px;
        padding: 30px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 6px;
        flex-direction: column;
        box-shadow: 0 2px 4px rgba(0, 0, 0, .1), 0 8px 16px rgba(0, 0, 0, .1);

      }
      .revolver {
      height: 80px;
      width: 80px;
      border-radius: 50px;
      display: flex;
      justify-content: center;
      position: relative;
      background:${({theme})=>theme.colors.primary};
      transform: rotate(30deg);
      animation: ${rotate} 6.5s cubic-bezier(0.74, 0.61, 0, 1.33) infinite;
      &__part {
        height: 40px;
        width: 30px;
        border-radius: 5px;
        transform-origin: bottom center;
        position: absolute;
        display: flex;
        justify-content: center;
      }
      &__part:after,
      &__part:before {
        content: " ";
        display: block;
        background:${({theme})=>theme.colors.bg};
        height: 26px;
        width: 26px;
        border-radius: 13px;
        margin-top: -18px;
      }
      &__part:before {
        position: absolute;
        height: 12px;
        width: 12px;
        margin-top: 11px;
        right: -5px;
        background:${({theme})=>theme.colors.bg};
        border: 2px solid ${({theme})=>theme.colors.bg};
      }
      }

      section:nth-of-type(1){
      transform: rotateZ(calc( 60deg * 1 ) );
      }
      section:nth-of-type(2){
      transform: rotateZ(calc( 60deg * 2 ) );
      }
      section:nth-of-type(3){
      transform: rotateZ(calc( 60deg * 3 ) );
      }
      section:nth-of-type(4){
      transform: rotateZ(calc( 60deg * 4 ) );
      }
      section:nth-of-type(5){
      transform: rotateZ(calc( 60deg * 5 ) );
      }
      section:nth-of-type(6){
      transform: rotateZ(calc( 60deg * 6 ) );
      }
`
const Loading = ()=>{
  const {data} = useLoading();
	if(data){
	return <Container >
    <div className="modal">
	   <div className="modal__container">
	   <div className="revolver">
		  <section className="revolver__part"></section>
		  <section className="revolver__part"></section>
		  <section className="revolver__part"></section>
		  <section className="revolver__part"></section>
		  <section className="revolver__part"></section>
		  <section className="revolver__part"></section>
		</div>
		<h5>Loading Packages....</h5>
	   </div>
   </div>
   </Container>
	}
	return null

}
export default Loading;
