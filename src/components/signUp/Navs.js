import styled from "styled-components";
import { useDispatch } from "react-redux";
import { clickJur, clickPhysic } from "../../store/registerSlice";

const Navs = ({physicFace, jurFace}) => {
    const dispatch = useDispatch()
    return (
        <ContainerNav>
        {physicFace ? (
            <NavItemTrue>Физ. лицо</NavItemTrue>
        ) : (
            <NavItemFalse onClick={() => dispatch(clickPhysic())}>
                Физ. лицо
            </NavItemFalse>
        )}
        {jurFace ? (
            <NavItemTrue>Юр. лицо</NavItemTrue>
        ) : (
            <NavItemFalse onClick={() => dispatch(clickJur())}>
                Юр. лицо
            </NavItemFalse>
        )}
    </ContainerNav>
    )
}

const ContainerNav = styled.div`
	width: 180px;
	height: 45px;
	display: flex;
	border-bottom: 1px solid #8f9499;
	justify-content: space-between;
    margin-bottom: 20px;
`

const NavItemTrue = styled.div`
	height: 100%;
	border-bottom: 3px solid #673bb7;
	background-color: transparent;
	padding: 15px 0;
	font-size: 14px;
	font-weight: 700;
	cursor: pointer;
`

const NavItemFalse = styled.div`
	height: 100%;
	background-color: transparent;
	padding: 15px 0;
	font-size: 14px;
	font-weight: 700;
	cursor: pointer;
`

export default Navs;