import { Routes } from '@/Routes';
import { getData } from '@/api';
import { Button } from '@/components';
import { cart, colorStyle } from '@/layout';
import { El } from '@/library';
import { svgs } from '@/svgs';

// header of checkout page
const header = () => {
  return El({
    element: 'div',
    className: 'w-full p-4 flex items-center justify-between',
    children: [
      El({
        element: 'div',
        className: 'flex items-center justify-center gap-4',
        children: [
          El({
            element: 'div',
            className: '',
            onclick: (e) => {
              Routes().navigate('/cart');
            },
            children: [
              El({
                element: 'span',
                className: 'w-10 h-10',
                innerHTML: svgs.Back,
              }),
            ],
          }),
          El({
            element: 'div',
            className: 'flex flex-col items-start justify-between',
            children: [
              El({
                element: 'span',
                className: 'text-[#152536] text-xl font-bold ',
                innerText: 'Checkout',
              }),
            ],
          }),
        ],
      }),
      // More icon
      El({
        element: 'div',
        className: '',
        children: [
          El({
            element: 'span',
            className: '[&_path]:fill-shoea',
            innerHTML: svgs.More,
          }),
        ],
      }),
    ],
  });
};
//footer of checkout page
const footer = () => {
  return El({
    element: 'div',
    className:
      'w-full p-6 h-28 flex items-start justify-between bg-white shadow-2xl border-2 rounded-t-3xl',
    children: [
      Button({
        child: 'Check out',
        icon: svgs.Next,
        variant: 'cart',
        classes:
          'font-bold w-full flex flex-row-reverse items-center justify-center gap-2',
        eventListener: [
          {
            event: 'click',
            callback: (e) => {
              //   Cart.push(productInfo);
              console.log(Cart);
              //   Routes().navigate('/shop');
            },
          },
        ],
      }),
    ],
  });
};

// render function for order list
const renderOrderList = () => {
  const orderList = document.getElementById('order-list');
  orderList.innerHTML = '';
  cart.map((item) => {
    getData(`/products/${item.id}`).then((response) => {
      const product = response.data;
      item.totalPrice = item.quantity * product.price;
      orderList.appendChild(
        El({
          element: 'div',
          className:
            'max-h-sm w-full flex items-center gap-2 p-4 shadow-lg rounded-2xl',
          children: [
            El({
              element: 'img',
              className: 'rounded-lg w-32 aspect-square	',
              src: item.img,
            }),
            El({
              element: 'div',
              className:
                'w-full flex flex-col gap-2 items-start justify-between ',
              children: [
                // title of selected product
                El({
                  element: 'div',
                  className: 'w-full flex items-center justify-between',
                  children: [
                    El({
                      element: 'span',
                      className:
                        'w-32 text-shoea text-xl font-bold whitespace-nowrap truncate',
                      innerText: item.name,
                    }),
                  ],
                }),
                //details of selected product
                El({
                  element: 'div',
                  className: 'w-full flex items-center justify-start gap-2 ',
                  children: [
                    El({
                      element: 'div',
                      className: `w-5 h-5 ${
                        colorStyle[item.color].bg
                      } flex items-center justify-center rounded-full cursor-pointer`,
                    }),
                    El({
                      element: 'span',
                      className: `text-shoea text-md font-semibold`,
                      innerText: item.color,
                    }),
                    El({
                      element: 'div',
                      className: `w-1 h-5 border-r-2 border-gray-500`,
                    }),
                    El({
                      element: 'span',
                      className: `text-shoea text-md font-semibold`,
                      innerText: 'size',
                    }),
                    El({
                      element: 'span',
                      className: `text-shoea text-md font-semibold`,
                      innerText: item.size,
                    }),
                  ],
                }),
                //product total price and quantity handel button
                El({
                  element: 'div',
                  className: 'w-full flex items-center justify-between gap-6',
                  children: [
                    El({
                      element: 'span',
                      className: 'text-shoea text-lg font-bold',
                      innerText: `$ ${item.totalPrice}`,
                    }),
                    El({
                      element: 'div',
                      className:
                        'w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center p-2',
                      children: [
                        El({
                          element: 'span',
                          className: 'font-bold',
                          innerHTML: item.quantity,
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          ],
        })
      );
    });
  });
};

export const Checkout = () => {
  setTimeout(renderOrderList, 0);
  return El({
    element: 'div',
    className: 'h-full flex flex-col items-center justify-start',
    children: [
      header(),
      // Shipping address
      El({
        element: 'div',
        className:
          'w-[90%] py-4 border-b border-gray-300 flex flex-col items-start justify-start gap-6',
        children: [
          El({
            element: 'span',
            className: 'text-2xl font-semibold',
            innerText: 'Shipping Address',
          }),
          //Shipping Address section
          El({
            element: 'div',
            className:
              'max-h-sm w-full flex items-center gap-4 p-4 shadow-lg rounded-2xl',
            children: [
              El({
                element: 'span',
                className:
                  'p-2 rounded-full border-8 border-gray-300 bg-black [&_path]:fill-white flex items-center justify-center',
                innerHTML: svgs.Location,
              }),
              El({
                element: 'div',
                className:
                  'w-full flex flex-col gap-2 items-start justify-between ',
                children: [
                  // title of selected product
                  El({
                    element: 'div',
                    className: 'w-full flex items-center justify-between',
                    children: [
                      El({
                        element: 'span',
                        className:
                          'w-32 text-shoea text-xl font-bold whitespace-nowrap truncate',
                        innerText: 'Address',
                      }),
                      El({
                        element: 'span',
                        innerHTML: svgs.Edit,
                      }),
                    ],
                  }),
                  //details of selected product
                  El({
                    element: 'div',
                    className: 'w-full flex items-center justify-start gap-2 ',
                    children: [
                      El({
                        element: 'p',
                        className: ``,
                        innerText: 'full address',
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
      //order list
      El({
        element: 'div',
        className:
          'w-[90%] py-4 border-b border-gray-300 flex flex-col items-start justify-start gap-6',
        children: [
          El({
            element: 'span',
            className: 'text-2xl font-semibold',
            innerText: 'Order List',
          }),
          //order list items
          El({
            element: 'div',
            id: 'order-list',
            className: 'w-full flex flex-col items-center justify-start gap-4',
          }),
        ],
      }),
      //Shipping Method
      El({
        element: 'div',
        className:
          'w-[90%] py-4 border-b border-gray-300 flex flex-col items-start justify-start gap-6',
        children: [
          El({
            element: 'span',
            className: 'text-2xl font-semibold',
            innerText: 'Choose Shipping',
          }),
          //Shipping Address section
          El({
            element: 'div',
            className:
              'max-h-sm w-full flex items-center gap-4 p-4 shadow-lg rounded-2xl',
            children: [
              El({
                element: 'span',
                className:
                  '[&_path]:fill-black flex items-center justify-center',
                innerHTML: svgs.Shipping,
              }),
              El({
                element: 'div',
                className:
                  'w-full flex flex-col gap-2 items-start justify-between ',
                children: [
                  // title of selected product
                  El({
                    element: 'div',
                    className: 'w-full flex items-center justify-between',
                    children: [
                      El({
                        element: 'span',
                        className: 'text-shoea text-xl font-bold',
                        innerText: 'Choose Shipping Type',
                      }),
                      El({
                        element: 'span',
                        innerHTML: svgs.Next,
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
      //poromo section
      El({
        element: 'div',
        className:
          'w-[90%] py-4 border-b border-gray-300 flex flex-col items-start justify-start gap-6',
        children: [
          El({
            element: 'span',
            className: 'text-2xl font-semibold',
            innerText: 'Poromo Code',
          }),
          //Shipping Address section
          El({
            element: 'div',
            className: 'w-full flex items-center justify-start gap-2 py-4',
            children: [
              El({
                element: 'input',
                className:
                  'w-[90%] bg-gray-200 rounded-2xl p-3 focus:outline-none',
                placeholder: 'Enter Promo Code',
              }),
              El({
                element: 'span',
                className:
                  '[&_path]:fill-white flex items-center justify-center bg-black rounded-full w-10 h-10',
                innerHTML: svgs.Plus,
              }),
            ],
          }),
        ],
      }),

      //price section
      footer(),
    ],
  });
};
