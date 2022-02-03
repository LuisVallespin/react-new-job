function Logo({ photo }) {
  return (
    <img
      src={photo}
      alt="Company Logo"
      className="w-14 rounded-lg shadow-sm shadow-gray-600"
    />
  );
}

export default Logo;
