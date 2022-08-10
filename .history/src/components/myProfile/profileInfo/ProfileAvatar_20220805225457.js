import styled from "styled-components";

const ProfileAvatar = () => {
    return (
        <Container>
            <Avatar src="https://kefirium.ru/storage/app/uploads/public/62d/918/835/62d9188353059146444667.jpg" alt="Avatar" />

        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    display: flex;
`

const Avatar = styled.img`
    width: 160px;
    height: 160px;
    border-radius: ;
`

export default ProfileAvatar;