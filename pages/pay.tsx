import { PayForm } from "@containers/pay/components/PayForm";
import { PayHeader } from "@containers/pay/components/PayHeader";

const PayPage = () => {
  return (
    <div className="container">
      <PayHeader />

      <div className="wrapper">
        <PayForm />
      </div>
    </div>
  );
};

export default PayPage;
