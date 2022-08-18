import styled from "styled-components"

const NewCollection = () => {
    return (
        
    )
}

const ModalContent = styled.div`
	padding: 30px;
	border-radius: 12px;
	background-color: #fafafa;
	max-width: 560px;
	width: 100%;
	min-height: min-content;
	max-height: max-content;
	margin-top: 830px;
`

const ModalHeader = styled.header`
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
`

const CloseBtn = styled.button`
	border: 2px solid #8f9499;
	background: #fff;
	border-radius: 50%;
	width: 30px;
	height: 30px;
	display: flex;
	align-items: center;
	cursor: pointer;
`

const ImageClose = styled(AiOutlineClose)`
	color: #8f9499;
	height: 26px;
	width: 26px;
`

const BackroundContainer = styled.div`
	background-image: url(${(props) => props.img});
	width: 270px;
	height: 270px;
	display: flex;
	align-items: center;
	justify-content: center;
	box-shadow: 0 4px 3px rgb(103 59 183 / 10%);
	border-radius: 12px;
	background-size: cover;
	background-repeat: no-repeat;
	background-position: 50% 50%;
	margin-bottom: 25px 0;
	text-align: center;
`

const Span = styled.span`
	color: #8f9499;
	text-decoration: underline;
	cursor: pointer;
`

const BannerFile = styled.div`
	width: 480px;
	height: 62px;
	background-image: url(${(props) => props.bannerImage});
	display: flex;
	align-items: center;
	justify-content: center;
	box-shadow: 0 4px 3px rgb(103 59 183 / 10%);
	border-radius: 12px;
	background-size: cover;
	background-repeat: no-repeat;
	background-position: 50% 50%;
	margin: 10px 0;
`

const InputName = styled.input`
	box-shadow: 0 4px 3px 0 rgb(103 59 183 / 10%);
	width: 100%;
	height: 62px;
	background: #fff;
	font-size: 16px;
	padding-left: 30px;
	border: none;
	border-radius: 35px;
	outline: none;
	margin-bottom: 25px;
`

const CategoriesSelect = styled.select`
	width: 100%;
	border-radius: 30px;
	box-shadow: 0 4px 3px 0 rgb(103 59 183 / 10%);
	height: 62px;
	background: #fff;
	outline: none;
	padding: 0 30px;
	color: #8f9499;
	border: none;
	font-size: 18px;
	margin-bottom: 30px;
`

const Description = styled.textarea`
	resize: none;
	width: 100%;
	font-size: 16px;
	box-shadow: 0 4px 3px 0 rgb(103 59 183 / 10%);
	height: 250px;
	padding: 20px;
	border: none;
	outline: none;
	resize: none;
	background: #fafafa;
	border-radius: 25px;
`

const SubmitButton = styled.button`
	width: 170px;
	height: 60px;
	background-color: #673bb7;
	border: 1px solid #673bb7;
	border-radius: 30px;
	box-shadow: 0 4px 3px rgb(103 59 183 / 10%);
	font-size: 16px;
	letter-spacing: 0.8px;
	cursor: pointer;
	color: #ffffff;
	font-weight: 700;
`

export default NewCollection;