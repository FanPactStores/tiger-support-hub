import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { CartProvider } from "@/contexts/CartContext";
import { Layout } from "@/components/Layout";
import Index from "./pages/Index";
import Shop from "./pages/Shop";
import About from "./pages/About";
import Disclaimer from "./pages/Disclaimer";
import MizzouDisclaimer from "./pages/MizzouDisclaimer";
import MizzouHome from "./pages/MizzouHome";
import MizzouFootball from "./pages/MizzouFootball";
import MizzouVolleyball from "./pages/MizzouVolleyball";
import MizzouSponsors from "./pages/MizzouSponsors";
import MizzouCart from "./pages/MizzouCart";
import MizzouCategoryPage from "./pages/MizzouCategoryPage";
import IndianaHome from "./pages/IndianaHome";
import IndianaDisclaimer from "./pages/IndianaDisclaimer";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <CartProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            {/* Main ecosystem routes with shared layout */}
            <Route path="/" element={<Layout><Index /></Layout>} />
            <Route path="/shop" element={<Layout><Shop /></Layout>} />
            <Route path="/about" element={<Layout><About /></Layout>} />
            <Route path="/disclaimer" element={<Layout><Disclaimer /></Layout>} />

            {/* Mizzou storefront routes (own header/footer) */}
            <Route path="/mizzou" element={<MizzouHome />} />
            <Route path="/mizzou/category/:slug" element={<MizzouCategoryPage />} />
            <Route path="/mizzou/category/:slug/:subcategory" element={<MizzouCategoryPage />} />
            <Route path="/mizzou/football" element={<MizzouFootball />} />
            <Route path="/mizzou/volleyball" element={<MizzouVolleyball />} />
            <Route path="/mizzou/sponsors" element={<MizzouSponsors />} />
            <Route path="/mizzou/cart" element={<MizzouCart />} />
            <Route path="/mizzou/disclaimer" element={<MizzouDisclaimer />} />

            {/* Indiana storefront */}
            <Route path="/indiana" element={<IndianaHome />} />
            <Route path="/indiana/disclaimer" element={<IndianaDisclaimer />} />

            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </CartProvider>
  </QueryClientProvider>
);

export default App;
