import React from "react";
import CollapseWrapper from "../common/collapse";
import PropTypes from "prop-types";

const ChildrenHW = ({ children }) => {
    return React.Children.map(children, (child, i) => {
        const config = {
            value: i
        };
        return React.cloneElement(child, { config });
    });
};
const Count = (props) => {
    return <div>{props.config.value}</div>;
};
Count.propTypes = {
    config: PropTypes.object
};
ChildrenHW.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
};
const ChildrenExercise = () => {
    return (
        <CollapseWrapper title="Упражнение">
            <p className="mt-3">
                У вас есть компоненты Списка. Вам необходимо к каждому из них
                добавить порядковый номер, относительно того, как они
                располагаются на странице. Вы можете использовать как{" "}
                <code>React.Children.map</code> так и{" "}
                <code>React.Children.toArray</code>
            </p>
            <ChildrenHW>
                <Component />
                <Component />
                <Component />
            </ChildrenHW>
        </CollapseWrapper>
    );
};

const Component = (props) => {
    return <div>{props.config.value + 1} Компонент списка</div>;
};
Component.propTypes = {
    config: PropTypes.object
};
export default ChildrenExercise;
