import { CiTrash } from "react-icons/ci";
import { RxUpdate } from "react-icons/rx";
import { RiAddLargeFill } from "react-icons/ri";
import Heading1 from "./Components/Heading1.jsx"
import Button from "./Components/Button.jsx";
import Input from "./Components/Input.jsx";

const Abc = () => {
  const style = {backgroundColor: "yellow", color: "red"}
  return (
    <>
    <h1 className="heading-1">This is main heading </h1>
    <Heading1/>
    <Input type={"text"} hint={"Enter name"} />
    <Input type={"password"} hint={"Enter password"} />
    <Input type={"datetime-local"} />
    <br />
    <Button name={"Create"} icon={<RiAddLargeFill />}  />
    <Button name={"Update"} icon={<RxUpdate />} />
    <Button name={"Delete"} icon= {<CiTrash />} />
    </>
  )
}

export default Abc

