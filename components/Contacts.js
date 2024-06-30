import Head from "next/head";

export default function Contact() {
  const contacts = [
    {
      name: "John Doe",
      position: "CEO",
      email: "john.doe@example.com",
      phone: "+1 (123) 456-7890",
    },
    {
      name: "Jane Smith",
      position: "Marketing Manager",
      email: "jane.smith@example.com",
      phone: "+1 (234) 567-8901",
    },
    {
      name: "Michael Johnson",
      position: "Support Specialist",
      email: "michael.johnson@example.com",
      phone: "+1 (345) 678-9012",
    },
  ];

  return (
    <div className="sm:mt-12 min-h-screen bg-gray-100">
      <Head>
        <title>Contact Us - Company Name</title>
        <meta
          name="description"
          content="Contact information about our team members"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-extrabold text-gray-900 mb-8 text-center">
            Contact Us
          </h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {contacts.map((contact, index) => (
              <div key={index} className="bg-white shadow-md rounded-lg p-6">
                <h2 className="text-lg font-semibold text-gray-900">
                  {contact.name}
                </h2>
                <p className="text-sm text-gray-500 mb-2">{contact.position}</p>
                <p className="text-sm text-gray-600 mb-2">{contact.email}</p>
                <p className="text-sm text-gray-600">{contact.phone}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
