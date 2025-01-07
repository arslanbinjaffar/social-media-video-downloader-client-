import UserInput from "../../components/UserInput/UserInput";
import IndexMessage from "../../components/Layout/IndexMessage";
import GuideMethods from "../../components/UI/guide";
import HowToSave from "../../components/UI/howtosave";
const Index = () => {
  return (
    <>
      <UserInput />
      <IndexMessage />
      <GuideMethods/>
      <HowToSave/>
    </>
  );
};

export default Index;
