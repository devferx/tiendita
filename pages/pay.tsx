import { PayForm } from "@containers/pay/components/PayForm";
import { PayHeader } from "@containers/pay/components/PayHeader";
import { PayList } from "@containers/pay/components/PayList";

const PayPage = () => {
  return (
    <div className="container">
      <PayHeader />

      <div className="pay-container wrapper">
        <PayList />
        <PayForm />
      </div>
    </div>
  );
};

export default PayPage;
