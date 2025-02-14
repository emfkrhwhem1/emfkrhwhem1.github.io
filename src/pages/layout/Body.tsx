import {FC, PropsWithChildren} from "react";
import '../../css/Common.css'

const Body : FC<PropsWithChildren> = ({ children }) => {
    return <div className={'bodyFrame'}>{children}</div>

}

export default Body