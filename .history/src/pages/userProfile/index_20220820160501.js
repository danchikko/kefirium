import styled from "styled-components";

const UserProfile = () => {
    return (
        <Container>

        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    padding-top: 80px;
`

const Wrapper = styled.div`
    width: 100%;
    height: 250px;
    background-image: url(${(props) => props.backround});
`

export default UserProfile;