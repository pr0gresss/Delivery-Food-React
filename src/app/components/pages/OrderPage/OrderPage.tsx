import { MainTemplate } from "@components/templates";
import styles from "./OrderPage.module.scss";
import { useAppDispatch, useAppSelector } from "@store";
import { clearCart, selectCartItems } from "@features/cart";
import { OrderItemCard } from "@components/molecules";
import { Button, Input } from "@components/atoms";
import { useFormState } from "@hooks";
import { useState } from "react";
import { selectCurrentUser } from "@features/auth";
import { postTypedData } from "@features/fetch";
import { ICartItem } from "@interfaces";

interface IOrder {
  address: {
    house: string;
    street: string;
  };
  userEmail: string;
  meals: ICartItem[];
}

const postOrder = postTypedData<unknown[], IOrder>(false);

const OrderPage = () => {
  const [form, setField, resetForm, errors, validateAll] = useFormState(
    { street: "", house: "" },
    { street: [], house: [] }
  );
  const [isLoading, setLoadingState] = useState(false);
  const order = useAppSelector(selectCartItems);
  const user = useAppSelector(selectCurrentUser);
  const dispatch = useAppDispatch();

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoadingState(true);

    if (!validateAll) return;

    const payload: IOrder = {
      userEmail: user!.email as string,
      meals: order,
      address: {
        street: form.street,
        house: form.house,
      },
    };

    if (payload.meals.length === 0) return;

    dispatch(
      postOrder({
        url: "https://65de35f3dccfcd562f5691bb.mockapi.io/api/v1/orders",
        key: "",
        payload: payload,
      })
    )
      .unwrap()
      .then(() => {
        dispatch(clearCart());
        resetForm();
      })
      .catch((err) => console.log(err))
      .finally(() => setLoadingState(false));

    resetForm();
  };

  return (
    <MainTemplate>
      <div className={styles.container}>
        {order.length > 0 && <h1 className={styles.container__heading}>Finish your order</h1>}
        <div className={styles.container__items}>
          {order.length > 0 ? (
            order.map((item) => <OrderItemCard key={item.product.id} cartItem={item} />)
          ) : (
            <div className={styles.container__empty}>Your cart is empty.</div>
          )}
        </div>
        {order.length > 0 && (
          <form className={styles.container__form} onSubmit={handleFormSubmit}>
            <div className={styles.container__form__input}>
              <label htmlFor="street">Street</label>
              <Input
                type="text"
                id="street"
                value={form.street}
                onChange={(e) => setField("street", e.target.value)}
                errors={errors.street}
                placeholder="Enter your street"
                disabled={isLoading}
                required
              />
            </div>
            <div className={styles.container__form__input}>
              <label htmlFor="house">House</label>
              <Input
                type="text"
                id="house"
                value={form.house}
                onChange={(e) => setField("house", e.target.value)}
                errors={errors.house}
                placeholder="Enter your house number"
                disabled={isLoading}
                required
              />
            </div>
            <Button type="submit">Make order</Button>
          </form>
        )}
      </div>
    </MainTemplate>
  );
};

export default OrderPage;
