import styled from 'styled-components'

export const StyledLoginWrapper = styled.div`
    background-color:#1b262c;
    padding:1rem;
    color:#fff;
    box-shadow:0 14px 53px rgba(27,25,25,0.87);
    border-radius:7px;
    width:80%;
    pointer-events: all;

    @media (min-width: 450px) {
        width:400px;
    }   

    @media (min-width: 600px) {
        padding:2rem;
    }   

`

export const StyledTitle = styled.h2`
    font-size:1.4rem;
    font-weight:400;
    text-align:center;
`

export const StyledFormRow = styled.div`
    margin:1.3rem 0;
    display:flex;
    flex-direction:column;

`

export const StyledInput = styled.input`
    background:none;
    border:2px solid #616161;
    color:#fff;
    outline:none;
    font-size: 1rem;
    padding: .4rem .3rem;
    font-weight:300;
    border-radius:5px;
    &:focus{
        border-bottom:2px solid #00b7c2;
    }
`

export const StyledLabel = styled.label`
    font-size:.8rem;
    display:block;
    padding:.2rem .1rem;
    color:#e2e2e2;
`

const ClearButton = styled.button`
    border:none;
    outline:none;
    background:none;
`

export const StyledTextButton = styled(ClearButton)`
    color:#00b7c2;

`

export const StyledButton = styled(ClearButton)`
    background:#00b7c2;
    color:#fff;
    padding:.5rem 0;
    font-weight:600;
    letter-spacing:.1rem;
    border-radius:5px;
`
