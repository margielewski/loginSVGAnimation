import React from 'react'

import {
    StyledLoginWrapper,
    StyledTitle,
    StyledFormRow,
    StyledTextButton,
    StyledButton,
    StyledInput,
    StyledLabel,
} from './style'

export default function Login() {
    return (
        <StyledLoginWrapper>
            <StyledTitle>Login to continue</StyledTitle>
            <form autoComplete="off">
                <StyledFormRow>
                    <StyledLabel htmlFor="email">
                        Email
                    </StyledLabel>
                    <StyledInput  id="email" type="text" />
                </StyledFormRow>
                <StyledFormRow>
                    <StyledLabel htmlFor="password">
                        Password
                    </StyledLabel>
                    <StyledInput id="password" type="password" />
                </StyledFormRow>
                <StyledFormRow>
                    <StyledTextButton>Forgot Password?</StyledTextButton>
                </StyledFormRow>
                <StyledFormRow>
                    <StyledButton>Login</StyledButton>
                </StyledFormRow>
            </form>
        </StyledLoginWrapper>
    )
}
