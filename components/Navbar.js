"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import FireplaceIcon from "@mui/icons-material/Fireplace";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import AllOutIcon from "@mui/icons-material/AllOut";
import HomeIcon from "@mui/icons-material/Home";
import ArticleIcon from "@mui/icons-material/Article";
import FaceIcon from "@mui/icons-material/Face";
import ExitToAppRoundedIcon from "@mui/icons-material/ExitToAppRounded";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { useSession, signOut } from "next-auth/react";
import Image from "next/image";
import ShoppingCart from "./ShoppingCart";
import { useShoppingCart } from "use-shopping-cart";
function Navbar() {
  const { handleCartClick, cartCount } = useShoppingCart();
  const { data } = useSession();
  const router = useRouter();

  const [onTop, setOnTop] = useState(true);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  });
  const handleScroll = () => {
    if (window.pageYOffset === 0) {
      setOnTop(true);
    } else {
      setOnTop(false);
    }
  };
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar color={onTop ? "transparent" : "inherit"}>
          <Toolbar>
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1 }}
              color="default"
            >
              E-Shopping
            </Typography>
            <Button color="inherit" onClick={() => router.push("/")}>
              <HomeIcon color="secondary" /> Home{" "}
            </Button>

            <Button color="inherit" onClick={() => router.push("/about")}>
              <AllOutIcon color="primary" /> About{" "}
            </Button>

            <Button color="inherit" onClick={() => router.push("/products")}>
              <ArticleIcon style={{ color: "red" }} /> Products
            </Button>

            <Button
              color="inherit"
              onClick={() => router.push("/cartProducts")}
            >
              <ShoppingBasketIcon style={{ color: "pink" }} />
              Shopping Cart{" "}
            </Button>
            {data?.user ? (
              <>
                <span style={{ marginRight: "15px", color: "orange" }}>
                  USER :{data?.user?.name}
                </span>{" "}
                <Button color="inherit" onClick={() => signOut()}>
                  <ExitToAppRoundedIcon style={{ color: "gray" }} /> Logout{" "}
                </Button>
              </>
            ) : (
              <Button color="inherit" onClick={() => router.push("/login")}>
                <FaceIcon style={{ color: "green" }} /> Login{" "}
              </Button>
            )}
            <button className="relative" onClick={() => handleCartClick()}>
              <Image
                src="/images/cart.png"
                width={40}
                height={40}
                alt="shopping cart icon"
              />
              <div
                className="rounded-full flex justify-center items-center
bg-emerald-500 text-xs text-white absolute w-6 h-5 bottom-6 -right-1"
              >
                {cartCount}
              </div>
            </button>

            <ShoppingCart />
            <Button color="inherit" onClick={() => router.push("/flashSales")}>
              <FireplaceIcon style={{ color: "yellow" }} /> Flash Sales{" "}
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
      <Toolbar />
    </>
  );
}
export default Navbar;
