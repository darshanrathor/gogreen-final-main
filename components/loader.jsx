export function Loader2() {
  return (
    <div className="flex w-full justify-center ">
      <svg
        className="w-[100px] h-[100px] fill-green-800"
        version="1.1"
        id="L9"
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        viewBox="0 0 100 100"
        enableBackground="new 0 0 0 0"
      >
        <path d="M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50">
          <animateTransform
            attributeName="transform"
            attributeType="XML"
            type="rotate"
            dur="1s"
            from="0 50 50"
            to="360 50 50"
            repeatCount="indefinite"
          />
        </path>
      </svg>
    </div>
  );
}



export function Loader3(){
  return(
      <div className="flex w-full justify-center ">
          <svg className="w-6 h-6" viewBox="0 0 38 38"
                xmlns="http://www.w3.org/2000/svg" stroke="#fff">
              <g fill="none" fillRule="evenodd">
                  <g transform="translate(1 1)" strokeWidth="2">
                      <circle strokeOpacity=".4" cx="18" cy="18" r="18"/>
                      <path d="M36 18c0-9.94-8.06-18-18-18">
                          <animateTransform attributeName="transform" type="rotate" from="0 18 18" to="360 18 18" dur="1s" repeatCount="indefinite"/>
                      </path>
                  </g>
              </g>
          </svg>

      </div>
  )
}