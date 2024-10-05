import Link from "next/link";
import React from "react";

const PrivacyPage = () => {
  return (
    <div className="p-4 sm:px-8 xl:px-20 space-y-6 max-w-2xl mx-auto mb-10">
      <div className="space-y-3">
        <h1 className="text-3xl font-bold">Privacy Policy</h1>
        <h2 className="text-lg sub-heading ">Effective Date: 06/10/2024</h2>
      </div>
      <p className="text-balance">
        At{" "}
        <Link
          href={"/"}
          className="text-white hover:text-blue-500 underline underline-offset-1 transition-colors duration-300 font-italic"
        >
          Code image
        </Link>{" "}
        we are committed to respecting your privacy. This Privacy Policy
        explains our approach to protecting your personal information when you
        use our website
      </p>
      <div className="sub">
        <h3 className="sub-heading">No Data Collection</h3>

        <p className="text-balance">
          We do not collect, store, or process any personal information from
          users who visit our website or use our services. This includes, but is
          not limited to, personally identifiable information such as:
        </p>

        <ul className="text-balance list-disc list-inside">
          <li>Name</li>
          <li>Email address</li>
          <li>IP address</li>
          <li>Phone number</li>
          <li>Location data</li>
          <li>Usage or activity data</li>
        </ul>
      </div>
      <div className="sub">
        <h3 className="sub-heading">
          No Use of Cookies or Tracking Technologies
        </h3>
        <p className="text-balance">
          Our website does not use cookies or any other tracking technologies to
          monitor user behavior or gather information about your visit. This
          includes first-party cookies, third-party cookies, beacons, or any
          other tracking mechanisms typically used for analytics, advertising,
          or user behavior analysis.
        </p>
      </div>
      <div className="sub">
        <h3 className="sub-heading">Third-Party Services</h3>
        <p className="text-balance">
          Our website does not use any third-party services (such as analytics
          or advertising platforms) that collect or track personal information.
        </p>
      </div>
      <div className="sub">
        <h3 className="sub-heading">Generated Content</h3>
        <p className="text-balance">
          Any content or images generated using the tools provided on our
          website are processed locally on your device. We do not store,
          transmit, or retain any information related to the content you
          generate. All content created remains on your device unless you choose
          to share it.
        </p>
      </div>
      <div className="sub">
        <h3 className="sub-heading">Your Rights</h3>
        <p className="text-balance">
          Since we do not collect or store any personal data, there are no user
          data rights related to accessing, modifying, or deleting personal
          data. If you have any questions or concerns about this policy, you may
          contact us at{" "}
          <Link
            href={"mailto:ankur@ankurghosh.xyz"}
            className="text-white hover:text-blue-500 underline underline-offset-1 transition-colors duration-300 font-italic"
          >
            ankur@ankurghosh.xyz
          </Link>
          .
        </p>
      </div>
      <div className="sub">
        <h3 className="sub-heading">Changes to This Privacy Policy</h3>
        <p className="text-balance">
          We reserve the right to update or modify this Privacy Policy at any
          time. If any changes are made, the updated policy will be posted on
          this page with the &quot;Effective Date&quot; above. We encourage
          users to check this page periodically to stay informed about how we
          protect your privacy.
        </p>
      </div>
      <div>
        <h3 className="sub-heading">Contact Us</h3>
        <p className="text-balance">
          If you have any questions or concerns about this Privacy Policy,
          please contact us at{" "}
          <Link
            href={"mailto:ankur@ankurghosh.xyz"}
            className="text-white hover:text-blue-500 underline underline-offset-1 transition-colors duration-300 font-italic"
          >
            ankur@ankurghosh.xyz
          </Link>
          .
        </p>
      </div>
    </div>
  );
};

export default PrivacyPage;
