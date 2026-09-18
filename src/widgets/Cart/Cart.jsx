import { useContext } from "react";
import { CartContext } from "@/enteties/Context/CartContext/CartContext";

const Cart = () => {
  const { cartList, btnDeleteCartItem } = useContext(CartContext);

  return (
    <main className="pt-22 bg-light-simp-bg dark:bg-primary-background px-[10%] flex flex-col gap-10">
      <div className="flex flex-col gap-2 ">
        <h1 className="font-primary text-4xl font-black dark:text-primary-text text-light-accent uppercase leading-none text-left transition delay-100 duration-200 easy-in">
          Your dream cart
        </h1>
        <p className="font-secondary dark:text-primary-text text-light-accent tracking-tighter font-semibold text-left lg:text-lg text-sm transition delay-100 duration-200 easy-in">
          {cartList.length} items in your cart
        </p>
      </div>

      <div className="flex flex-row gap-4 justify-between lg:pl-[10%]">
        <ul className="flex flex-col gap-4 flex-3 max-w-200">
          {cartList.map((auto) => (
            <li
              className="flex flex-row border border-secondary-text p-4 gap-4 justify-between"
              key={auto.id}
            >
              <div className="flex flex-row gap-4">
                <div className="max-h-50 flex">
                  <img
                    className="max-w-35 w-full max-h-50 object-cover object-[70%_50%]"
                    src={auto.image}
                    alt="auto image"
                  />
                </div>
                <div className="flex flex-col justify-between gap-4">
                  <div className="flex flex-col gap-4">
                    <h2 className="font-secondary dark:text-primary-text text-light-accent tracking-tighter font-black text-left lg:text-3xl text-2xl transition delay-100 duration-200 easy-in">
                      {auto.model}
                    </h2>
                    <p className="font-secondary dark:text-primary-text text-light-accent tracking-tighter font-semibold text-left lg:text-xl text-lg transition delay-100 duration-200 easy-in">
                      Color:
                      <span className="font-normal">{auto.color[1].name}</span>
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={""}
                    className="min-w-12 px-6 py-1 rounded-lg dark:bg-brand-accent dark:hover:bg-brand-accent-dark bg-light-simp-accent hover:bg-light-accent hover:scale-105 transition delay-100 duration-200 easy-in cursor-pointer font-secondary text-second-text text-md w-max text-primary-text uppercase tracking-tighter font-semibold text-normal"
                  >
                    add to comparison
                  </button>
                </div>
              </div>
              <div>
                <button
                  onClick={() => btnDeleteCartItem(auto)}
                  className="w-10 h-10 border-2 relative dark:border-brand-accent dark:hover:border-brand-accent-dark border-light-simp-accent hover:border-light-accent hover:scale-105 transition delay-100 duration-200 easy-in cursor-pointer"
                >
                  <svg
                    width="25"
                    height="27"
                    viewBox="0 0 25 27"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute top-1 left-1.5 dark:fill-brand-accent dark:hover:fill-brand-accent-dark fill-light-simp-accent hover:fill-light-accent transition delay-100 duration-200 easy-in cursor-pointer"
                  >
                    <path d="M10.0962 4.33929V4.82143H14.9038V4.33929C14.9038 3.69992 14.6506 3.08675 14.1998 2.63465C13.749 2.18256 13.1375 1.92857 12.5 1.92857C11.8625 1.92857 11.251 2.18256 10.8002 2.63465C10.3494 3.08675 10.0962 3.69992 10.0962 4.33929ZM8.17308 4.82143V4.33929C8.17308 3.18844 8.62895 2.08472 9.4404 1.27095C10.2519 0.457173 11.3524 0 12.5 0C13.6476 0 14.7481 0.457173 15.5596 1.27095C16.3711 2.08472 16.8269 3.18844 16.8269 4.33929V4.82143H24.0385C24.2935 4.82143 24.538 4.92302 24.7184 5.10386C24.8987 5.2847 25 5.52997 25 5.78571C25 6.04146 24.8987 6.28673 24.7184 6.46757C24.538 6.64841 24.2935 6.75 24.0385 6.75H22.5885L20.7692 22.7263C20.6351 23.9029 20.0738 24.9888 19.1924 25.777C18.3111 26.5652 17.1713 27.0006 15.9904 27H9.00961C7.82871 27.0006 6.68891 26.5652 5.80755 25.777C4.92619 24.9888 4.36492 23.9029 4.23077 22.7263L2.41154 6.75H0.961538C0.706523 6.75 0.461951 6.64841 0.281628 6.46757C0.101305 6.28673 0 6.04146 0 5.78571C0 5.52997 0.101305 5.2847 0.281628 5.10386C0.461951 4.92302 0.706523 4.82143 0.961538 4.82143H8.17308ZM6.14231 22.5064C6.22258 23.2122 6.55899 23.8637 7.08742 24.3367C7.61586 24.8098 8.29937 25.0713 9.00769 25.0714H15.9913C16.6997 25.0713 17.3832 24.8098 17.9116 24.3367C18.44 23.8637 18.7765 23.2122 18.8567 22.5064L20.6538 6.75H4.34712L6.14231 22.5064ZM9.61538 10.125C9.8704 10.125 10.115 10.2266 10.2953 10.4074C10.4756 10.5883 10.5769 10.8335 10.5769 11.0893V20.7321C10.5769 20.9879 10.4756 21.2332 10.2953 21.414C10.115 21.5948 9.8704 21.6964 9.61538 21.6964C9.36037 21.6964 9.1158 21.5948 8.93547 21.414C8.75515 21.2332 8.65385 20.9879 8.65385 20.7321V11.0893C8.65385 10.8335 8.75515 10.5883 8.93547 10.4074C9.1158 10.2266 9.36037 10.125 9.61538 10.125ZM16.3462 11.0893C16.3462 10.8335 16.2449 10.5883 16.0645 10.4074C15.8842 10.2266 15.6396 10.125 15.3846 10.125C15.1296 10.125 14.885 10.2266 14.7047 10.4074C14.5244 10.5883 14.4231 10.8335 14.4231 11.0893V20.7321C14.4231 20.9879 14.5244 21.2332 14.7047 21.414C14.885 21.5948 15.1296 21.6964 15.3846 21.6964C15.6396 21.6964 15.8842 21.5948 16.0645 21.414C16.2449 21.2332 16.3462 20.9879 16.3462 20.7321V11.0893Z" />
                  </svg>
                </button>
              </div>
            </li>
          ))}
        </ul>
        <div className="max-w-150">
          <div className="flex-2 flex flex-col border border-secondary-text p-4 gap-4 w-full">
            <div className="flex flex-col gap-2 w-full">
              <h2 className="font-secondary dark:text-primary-text text-light-accent tracking-normal font-black text-left lg:text-3xl text-2xl transition delay-100 duration-200 easy-in">
                Order summary
              </h2>
              <p className="font-secondary dark:text-primary-text text-light-accent tracking-tighter font-semibold text-left lg:text-xl text-lg transition delay-100 duration-200 easy-in">
                Car list:
              </p>
            </div>
            <ul className=" w-full list-disc pl-10 font-secondary dark:text-primary-text text-light-accent tracking-tighter font-semibold text-left lg:text-xl text-lg transition delay-100 duration-200 easy-in">
              {cartList.map((auto) => (
                <li className="" key={auto.id}>
                  {auto.model}
                  <span className="font-normal">({auto.color[1].name})</span>
                </li>
              ))}
            </ul>
            <button className="w-full px-6 py-1 rounded-lg dark:bg-brand-accent dark:hover:bg-brand-accent-dark bg-light-simp-accent hover:bg-light-accent hover:scale-105 transition delay-100 duration-200 easy-in cursor-pointer font-secondary text-second-text text-md text-primary-text uppercase tracking-tighter font-semibold text-normal">
              contact to buy
            </button>
          </div>
        </div>
      </div>
      <div>
        <h2 className="font-secondary dark:text-primary-text text-light-accent tracking-normal font-black text-left lg:text-3xl text-2xl transition delay-100 duration-200 easy-in">
          Comparsion{" "}
          <span className="dark:text-brand-accent text-light-simp-accent">
            {/* ({compList.length}/3) */}
          </span>
        </h2>
      </div>
    </main>
  );
};

export default Cart;
