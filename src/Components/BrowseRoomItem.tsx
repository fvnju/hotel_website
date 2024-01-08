import { ResponsiveContainer } from "recharts";
import { Button } from "@/Components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/Components/ui/drawer";
import { useState } from "react";

interface proptype {
  roomType: string;
  price: number;
  imgURL: string;
}

export default function BrowseRoomItem(props: proptype) {
  function formattedPrice(c: number) {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "NGN",
    }).format(c);
  }

  const [unitPrice, adjustedPrice] = useState(props.price);
  const [days, adjustedDays] = useState(1);

  function priceIncrement(p: number) {
    return p + props.price;
  }
  function priceDecrement(p: number) {
    if (p != props.price) {
      return p - props.price;
    } else {
      return props.price;
    }
  }

  //REFACTORED THIS FUNCTION (CHECK LINE 92)
  // function singularOrPlural(days: number) {
  //   if (days == 1) {
  //     return "";
  //   } else {
  //     return "s";
  //   }
  // }

  const boxShadow = {
    boxShadow: "0px 0px 10px grey",
  };
  const fallbackImage = "SlideShow/photo (2).jpg";
  return (
    <>
      <Drawer>
        <DrawerTrigger asChild>
          <div
            className="w-40 h-80 rounded-xl cursor-pointer transition ease-in-out delay-100 hover:scale-110 duration-300"
            style={boxShadow}
          >
            <img
              src={props.imgURL || fallbackImage}
              alt="..."
              className="w-full h-4/6 object-cover rounded-t-xl"
            />
            <div className="p-2">
              <h2 className="text-2xl font-bold capitalize">
                {props.roomType}
              </h2>
              <p className="text-sm text-center">
                {formattedPrice(props.price)}/night
              </p>
            </div>
          </div>
        </DrawerTrigger>

        <DrawerContent>
          <div className="mx-auto w-full max-w-sm">
            <DrawerHeader>
              <DrawerTitle className="capitalize">{props.roomType}</DrawerTitle>
              <DrawerDescription>{"Location"}</DrawerDescription>
            </DrawerHeader>
            <div className="mt-3 h-[320px]">
              <ResponsiveContainer width="100%" height="100%">
                <img src={props.imgURL || fallbackImage} alt="" />
              </ResponsiveContainer>
            </div>
            <div className="text-center font-medium">
              {days + " "}night{days > 1 ? "s" : ""}
            </div>
            <div className="flex justify-center items-center gap-1 text-center">
              <Button
                disabled={unitPrice == props.price}
                variant={"outline"}
                onClick={() => {
                  adjustedPrice(priceDecrement(unitPrice));
                  adjustedDays(priceDecrement(unitPrice) / props.price);
                }}
              >
                -
              </Button>
              {formattedPrice(unitPrice)}
              <Button
                variant={"outline"}
                onClick={() => {
                  adjustedPrice(priceIncrement(unitPrice));
                  adjustedDays(priceIncrement(unitPrice) / props.price);
                }}
              >
                +
              </Button>
            </div>
            <DrawerFooter>
              <Button>{formattedPrice(unitPrice)}</Button>
              <DrawerClose asChild>
                <Button
                  variant="outline"
                  onClick={() => {
                    adjustedPrice(props.price);
                    adjustedDays(1);
                  }}
                >
                  Cancel
                </Button>
              </DrawerClose>
            </DrawerFooter>
          </div>
        </DrawerContent>
      </Drawer>
    </>
  );
}
