import { companyLogos } from "../constants";

const CompanyLogos = ({ className }) => {
  return (
    <div id="clients" className={className}>
      <h5 className="tagline mb-6 text-center text-n-1/50">
      Helped Businesses Grow Online at
      </h5>
      <ul className="flex">
        {companyLogos.map((logo, index) => (
          <li
            className="flex items-center justify-center flex-1 h-[8.5rem]"
            key={index}
          >
            <img src={logo} width={134} height={28} alt={logo} className="w-[16vw] h-[13vh] object-contain grayscale"/>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CompanyLogos;