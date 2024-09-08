import { Button, FormControl, IconButton, InputAdornment, InputLabel, Link, OutlinedInput, TextField } from "@mui/material";
import React, { useState } from "react";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { AppProvider, SignInPage } from '@toolpad/core';
import { useTheme } from '@mui/material/styles';


const providers = [{ id: 'credentials', name: 'Email and Password' }];


function CustomEmailField() {
    return (
        <TextField id="input-with-icon-textfield"
            label="Username"
            name="email"
            type="email"
            size="small"
            required
            fullWidth
            slotProps={{
                input: {
                    startAdornment: (
                        <InputAdornment position="start">
                            {/* <AccountCircle fontSize="inherit" /> */}
                        </InputAdornment>
                    ),
                },
            }}
            variant="outlined" />
    )
}

function CustomPasswordField() {
    const [showPassword, setshowPassword] = useState(false);


    const handleClickShowPassword = () => {
        setshowPassword((show) => !show)
    }

    const handleMouseDownPassword = (e: React.MouseEvent) => {
        e.preventDefault()
    }
    return (
        <FormControl sx={{ my: 2 }} fullWidth variant="outlined">
            <InputLabel size="small" htmlFor="outlined-adornment-password">
                Password
            </InputLabel>
            <OutlinedInput
                id="outlined-adornment-password"
                type={showPassword ? 'text' : 'password'}
                name="password"
                size="small"
                endAdornment={
                    <InputAdornment position="end">
                        <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            edge="end"
                            size="small"
                        >
                            {showPassword ? (
                                <VisibilityOff fontSize="inherit" />
                            ) : (
                                <Visibility fontSize="inherit" />
                            )}
                        </IconButton>
                    </InputAdornment>
                }
                label="Password"
            />
        </FormControl>
    )
}

function CustomButton() {
    return (
        <Button
            type="submit"
            variant="outlined"
            color="info"
            size="small"
            disableElevation
            fullWidth
            sx={{ my: 2 }}
        >
            Sign In
        </Button>
    )
}

function SignUpLink() {
    return (
        <Link href="/" variant="body2">
            Sign up
        </Link>
    );
}

function ForgotPasswordLink() {
    return (
        <Link href="/" variant="body2">
            Forgot password?
        </Link>
    );
}

export default function SlotSignIg() {
    const theme = useTheme();
    return (
        <AppProvider theme={theme}>
            <SignInPage
                signIn={(provider, formData) =>
                    alert(
                        `Signing in with "${provider.name}" and credentials: ${formData.get('email')}, ${formData.get('password')}`,
                    )
                }
                slots={{
                    emailField: CustomEmailField,
                    passwordField: CustomPasswordField,
                    submitButton: CustomButton,
                    signUpLink: SignUpLink,
                    forgotPasswordLink: ForgotPasswordLink,
                }}
                providers={providers} />
        </AppProvider>
    )
}