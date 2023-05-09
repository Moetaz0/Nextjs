"use client";
import AdminSidebar from "@/components/adminSidebar";
function ProductLayout({ children }) {
  return (
    <div className="row">
      <div className="col-md-12 col-lg-2 mb-4 mb-lg-0 pt-4 ">
        <AdminSidebar />
      </div>
      <div className="col-md-12 col-lg-9 mb-4 mb-lg-0 pt-4 ">{children}</div>
    </div>
  );
}
export default ProductLayout;
