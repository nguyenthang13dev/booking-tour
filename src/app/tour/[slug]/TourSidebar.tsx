// components/Tour/TourSidebar.tsx
import React from 'react';

const TourSidebar: React.FC = () => {
  return (
    <div className="sidebar">
      <div className="box-inner p-4 border rounded">
        <div className="product-name text-lg font-bold">Chuyến du lịch Hải Phòng - Singapore 4 ngày 3 đêm</div>
        <div className="rating-wrap mt-2">Rating: 5/5</div>
        <div className="mt-4">
          <div className="origi-price line-through">Giá cũ: 15,990,000đ</div>
          <div className="sale-price text-red-500 font-bold">Giá mới: 12,990,000đ</div>
          <div className="saleoff-badge bg-orange-500 text-white p-2 rounded">Tiết kiệm 19%</div>
        </div>
        <button className="btn btn-orange w-full mt-4">ĐẶT NGAY</button>
      </div>
      <div className="widget-bg mt-4 p-4 bg-gray-100 rounded">
        <p>Hoặc để lại SĐT - BookingTour sẽ gọi cho bạn!</p>
        <div className="input-group flex mt-2">
          <input type="text" placeholder="Số điện thoại..." className="form-control flex-1 p-2 rounded-l" />
          <button className="btn btn-primary p-2 rounded-r">Submit</button>
        </div>
      </div>
    </div>
  );
};

export default TourSidebar;