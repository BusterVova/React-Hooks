import React, { useState } from "react";
import CardWrapper from "../../components/common/Card";

const withComponent = (Component) => (props) => {
    const [state, setState] = useState(localStorage.getItem("user"));
    const onLogin = () => {
        setState("user");
        localStorage.setItem("user", "user");
    };
    const onLogOut = () => {
        setState("");
        localStorage.removeItem("user");
    };
    return (
        <CardWrapper>
            <Component
                {...props}
                isAuth={Boolean(state)}
                onLogin={onLogin}
                onLogOut={onLogOut}
            />
        </CardWrapper>
    );
};

export default withComponent;
