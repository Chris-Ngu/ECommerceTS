interface Props {

}

interface State {
    loginEmail: string;
    loginPassword: string;

    registerEmail: string;
    registerPassword: string;
    registerConfirmPassword: string;

    forgotEmail: string;
}

export interface ILoginProps extends Props { };
export interface ILoginState extends State { };