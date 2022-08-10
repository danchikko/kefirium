import styled from "styled-components";

const ProfileAvatar = () => {
    return (
        <Container>
            <Avatar src="https://kefirium.ru/storage/app/uploads/public/62d/918/835/62d9188353059146444667.jpg" />
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    display: flex;
`

const Avatar = styled.img`

`

export default ProfileAvatar;