import { Link } from "react-router-dom";
import styled from "styled-components";

const ProfileVerified = () => {
    return (
        <Verified>
            <Text></Text>
        </Verified>
    )
}

const Verified = styled.div`
    max-width: 616px;
    height: 35px;
    display: flex;
    align-items: flex-end;
`

const Links = styled(Link)`
    color: #3dabef;
    font-size: 11px;
`

export default ProfileVerified;