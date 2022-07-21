import styled from "styled-components";
import FirstBlock from "./FirstBlock";
import SecondBlock from "./SecondBlock";

const Footer = () => {
    return (
        <MainFooter>
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