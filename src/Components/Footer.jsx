import React from "react";

const Footer = () => {
  return (
    <footer className="text-gray-600 body-font mt-20">
      <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
        <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
        <svg
            width="35"
            height="35"
            viewBox="0 0 132 135"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_215_20)">
              <path
                d="M0.01 96.494V65.854C0.11 48.134 6.73 33.124 18.85 20.364C27.2913 11.5386 38.0269 5.24268 49.85 2.18398C59.3476 -0.297381 69.2733 -0.669424 78.93 1.09398C89.03 2.77398 97.93 6.95398 106.22 12.574C110.833 15.8336 114.981 19.7058 118.55 24.084C124.302 30.8709 128.634 38.7429 131.29 47.234C132.29 50.344 131.64 51.404 128.38 51.424H109.93C108.98 51.5086 108.029 51.2757 107.225 50.7618C106.422 50.2478 105.812 49.4819 105.49 48.584C100.55 37.944 92.1 31.014 81.32 26.934C73.5503 24.0956 65.1038 23.6738 57.09 25.724C49.7617 27.3346 43.0246 30.9489 37.63 36.164C28.94 44.624 24.36 54.954 24.44 67.304C24.57 88.074 24.44 108.834 24.44 129.604C24.44 133.874 23.67 134.604 19.33 134.664H4.62C0.48 134.664 0 134.184 0 130.134L0.01 96.494Z"
                fill="#80C40B"
              />
              <path
                d="M44.93 122.084V113.614C44.93 111.534 45.6 110.234 47.93 110.234C52.93 110.234 57.93 110.114 62.86 110.234C76.14 110.484 88 106.944 97.54 97.314C100.635 94.2848 103.141 90.7076 104.93 86.764C105.348 85.515 106.177 84.4441 107.28 83.7252C108.384 83.0063 109.698 82.6817 111.01 82.804C116.91 82.924 122.82 82.804 128.72 82.804C131.49 82.804 132.21 83.964 131.39 86.614C127.419 100.127 119.226 112.014 108.01 120.534C99.34 127.094 89.72 131.884 78.67 133.334C70.7083 134.556 62.6356 134.892 54.6 134.334C52.72 134.164 50.8 134.644 48.89 134.664C45.89 134.664 44.99 133.764 44.89 130.824C44.79 127.884 44.89 125.014 44.89 122.104L44.93 122.084Z"
                fill="#80C40B"
              />
              <path
                d="M40.44 67.204C39.77 52.394 53.35 40.504 66.44 40.314C80.75 40.114 93.8 51.764 93.71 66.844C93.63 82.274 82.01 93.654 66.81 93.664C63.3361 93.676 59.8943 92.9991 56.6836 91.6725C53.473 90.3459 50.5572 88.3959 48.105 85.9352C45.6527 83.4746 43.7127 80.5522 42.397 77.3371C41.0813 74.1219 40.4162 70.6778 40.44 67.204Z"
                fill="#8974EB"
              />
            </g>
            <defs>
              <clipPath id="clip0_215_20">
                <rect width="131.721" height="134.664" fill="white" />
              </clipPath>
            </defs>
          </svg>
          <span className="ml-3 text-xl">PhoneFinder</span>
        </a>
        <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
          © 2024 PhoneFinder —
          <a
            
            className="text-gray-600 ml-1"
            rel="noopener noreferrer"
            target="_blank"
          >
            @phonefinder
          </a>
        </p>
        <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
          <a className="text-gray-500">
            <svg
              fill="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
            </svg>
          </a>
          <a className="ml-3 text-gray-500">
            <svg
              fill="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
            </svg>
          </a>
          <a className="ml-3 text-gray-500">
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
            </svg>
          </a>
          <a className="ml-3 text-gray-500">
            <svg
              fill="currentColor"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="0"
              className="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <path
                stroke="none"
                d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
              ></path>
              <circle cx="4" cy="4" r="2" stroke="none"></circle>
            </svg>
          </a>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
