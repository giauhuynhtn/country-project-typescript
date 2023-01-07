function Header() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        border: "1px solid #ccc",
      }}>
      <p>Check</p>
      <p>Customer</p>
      <p>Last seen</p>
      <p>Orders</p>
      <p>Total spent</p>
      <p>Latest purchase</p>
      <p>News</p>
      <p>Segments</p>
    </div>
  );
}

export default Header;
