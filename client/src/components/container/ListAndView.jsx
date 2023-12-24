import { RefreshCw } from "lucide-react";
import { useEffect, useState } from "react";
import { textFormat } from "../../utils/textFormat";
import { OrderCard } from "../card/OrderCard";
import { Text } from "../text/Text";

const TabContent = ({ selectedOrder, viewLoading }) => {
  const [key, setKey] = useState(0);

  const { status, date } = selectedOrder;

  useEffect(() => {
    setKey((prev) => prev + 1);
  }, [selectedOrder]);

  return viewLoading ? (
    <div className="w-[450px] rounded-lg bg-foreground p-4">
      <div className="flex items-center gap-2">
        <RefreshCw className="animate-spin text-neutral-400" />
        <Text variant="titleMedium" type="m" className={"text-neutral-400"}>
          Loading...
        </Text>
      </div>
    </div>
  ) : (
    <article key={key} className=" w-[450px] animate-enterFromLeft rounded-lg bg-foreground p-4">
      {selectedOrder ? (
        <div className="flex flex-col justify-between">
          <div>
            <Text variant="titleMedium" type="m" className={"text-neutral-400"}>
              Details
            </Text>
            <hr className="border" />
            <section className="my-4 w-full">
              <section className="h-52">
                {Object.entries(selectedOrder).map(([key, value]) => (
                  <>
                    {key === "date" ? null : key === "status" ? null : (
                      <section key={key} className="flex justify-between gap-4 font-semibold">
                        <div className="w-40 font-normal text-neutral-400">{textFormat(key)}</div>
                        <div className="w-60 font-medium">{textFormat(value)}</div>
                      </section>
                    )}
                  </>
                ))}
              </section>
              <section className="rounded-md border-2 px-4 py-2">
                <div className="mb-4">
                  <div className="flex w-full items-center justify-between">
                    <Text variant="titleSmall">Orders</Text>

                    <span className="items-start rounded-full px-2 text-sm">{date}</span>
                  </div>
                  <span
                    className={`rounded-full px-2 text-sm ${
                      status === "complete"
                        ? "bg-green-200 text-green-500"
                        : "bg-yellow-200 text-yellow-500"
                    }`}
                  >
                    {textFormat(status)}
                  </span>
                </div>
                {Object.entries(selectedOrder).map(([key, value]) => (
                  <>
                    {key === "date" ? null : (
                      <section key={key} className="flex justify-between gap-4 font-semibold">
                        <div className="w-40 font-normal text-neutral-400">{textFormat(key)}</div>
                        <div className="w-60 font-medium">{textFormat(value)}</div>
                      </section>
                    )}
                  </>
                ))}
              </section>
            </section>
          </div>
        </div>
      ) : (
        <>
          <Text h1 className={"text-textColor-light"}>
            Click <span className="text-accent-secondary"> Details</span> to View Information
          </Text>
        </>
      )}
    </article>
  );
};

export const ListAndView = ({ data }) => {
  const [selectedOrder, setSelectedOrder] = useState(data[0]);
  const [loading, setLoading] = useState(false);

  const handleOrderClick = (order) => {
    setSelectedOrder(order);
  };

  return (
    <>
      <div className="flex w-full justify-between gap-4">
        <div className="h-[90vh] w-fit overflow-auto overflow-x-hidden">
          {data.map((order, index) => (
            <OrderCard
              key={index}
              data={order}
              status={order.status}
              onClick={() => {
                console.log("clicked OrderCard");
                handleOrderClick(order);
              }}
              selectedOrder={selectedOrder}
              setViewLoading={setLoading}
            />
          ))}
        </div>
        {<TabContent viewLoading={loading} selectedOrder={selectedOrder} />}
      </div>
    </>
  );
};
