import { useDispatch } from "react-redux";
import styled from "styled-components";
import { closeCategoriesModal } from "../../store/categoriesSlice";
import FirstBlock from "./FirstBlock";
import SecondBlock from "./SecondBlock";

const Footer = () => {
    const dispatch = useDispatch()
    return (
        <MainFooter onClick={() => dispatch(closeCategoriesModal())}>
            <FirstBlock />
            <SpecialDiv />
            <SecondBlock />
        </MainFooter>
    )
}

const MainFooter = styled.footer`
    width: 100%;
    background: #673bb7;
`

const SpecialDiv = styled.div`
    width: 100%;
    border-bottom: 2.5px dashed #ffff;
`

export default Footer;