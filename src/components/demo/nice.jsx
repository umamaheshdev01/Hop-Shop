import React from 'react';

const CartIcon = () => {

    const itemCount =1;
  return (
    <div className="relative">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="24"
        height="24"
        className="stroke-current text-white"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M21 5H6.905L6.291 3.5C6.127 3.148 5.799 3 5.439 3H3c-.552 0-1 .448-1 1s.448 1 1 1h1.586l2.853 11.414C7.346 17.208 7.684 18 8.273 18H19c.552 0 1-.448 1-1s-.448-1-1-1H8.586l-.293-1.172L19 15.827v-4.998l1.293-4.809c.058-.217.078-.448.078-.678 0-1.104-.896-2-2-2zm-1.707 2l-12.586-.002-.266 1h13.059c.448 0 .819.312.912.75l1.406 5.25H8.586l-.293-1.172L19.293 7H19zm-1.996 13.5H8.273c-.06 0-.117.019-.172.027L6.188 9.896 4.795 6.5H20.5l-1.304 4.854.008.007-.001.005-.001.007-.001.006-.001.007-.002.005-.001.006-.001.006L18 19.5z"
        />
      </svg>
      {itemCount > 0 && (
        <div className="absolute top-0 right-0 mt-2 mr-2 bg-red-500 rounded-full text-white w-5 h-5 flex items-center justify-center text-xs">
          {itemCount}
        </div>
      )}
    </div>
  );
};

export default CartIcon;
