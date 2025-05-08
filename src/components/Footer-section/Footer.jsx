import FooterBottom from "../Footer-section/FooterBottom";
import FooterSocialLinks from "./FooterSocialLink";

export default function Footer() {
  return (
    <div className="bg-white dark:bg-gray-800">
      <div className="max-w-screen-xl p-4 py-6 mx-auto lg:py-16 md:p-8 lg:p-10">
        <div></div>

        <div>
          <FooterBottom />
          <FooterSocialLinks />
        </div>
      </div>
    </div>
  );
}
