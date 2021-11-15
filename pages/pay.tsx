import { ModalSuccess } from "@containers/pay/components/ModalSuccess";
import { PayForm } from "@containers/pay/components/PayForm";
import { PayHeader } from "@containers/pay/components/PayHeader";
import { PayList } from "@containers/pay/components/PayList";
import { useState } from "react";

const PayPage = () => {
  const [isActiveModal, setIsActiveModal] = useState(false);

  const toggleIsActiveModal = () => setIsActiveModal(!isActiveModal);

  return (
    <div className="container">
      <PayHeader />

      <div className="pay-container wrapper">
        <PayList />
        <PayForm toggleIsActiveModal={toggleIsActiveModal} />
      </div>

      <ModalSuccess
        isActive={isActiveModal}
        toggleIsActiveModal={toggleIsActiveModal}
      />
    </div>
  );
};

export default PayPage;
