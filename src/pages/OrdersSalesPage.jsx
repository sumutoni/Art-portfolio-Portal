import { FiEye, FiFilter, FiMoreVertical, FiSearch } from "react-icons/fi";
import { orders } from "../data/mockData.js";

export default function OrdersSalesPage() {
  return (
    <section className="page">
      <header className="page-header">
        <div>
          <h2>Orders & Sales</h2>
          <p>View and manage all artwork orders and payments.</p>
        </div>
        <div className="header-actions">
          <button className="btn btn-secondary">May 15 - Jun 15, 2024</button>
          <button className="btn btn-secondary">Export</button>
        </div>
      </header>

      <div className="metrics-grid order-metrics">
        <article className="card metric-card"><p className="label">Total Sales</p><h3>$24,780</h3><p className="delta">+18.6% vs last 30 days</p></article>
        <article className="card metric-card"><p className="label">Total Orders</p><h3>12</h3><p className="delta">+33.3% vs last 30 days</p></article>
        <article className="card metric-card"><p className="label">Pending</p><h3>3</h3><p>$7,800 value</p></article>
        <article className="card metric-card"><p className="label">Completed</p><h3>7</h3><p>$15,980 value</p></article>
        <article className="card metric-card"><p className="label">Refunded</p><h3>2</h3><p>$1,600 value</p></article>
      </div>

      <div className="split-layout">
        <article className="card panel table-panel">
          <div className="panel-head controls"><div className="tabs"><span className="active">All Orders (12)</span><span>Pending (3)</span><span>Paid (7)</span></div><div className="header-actions"><button className="btn btn-secondary"><FiFilter /> Filter</button><button className="btn btn-secondary"><FiSearch /> Search orders...</button></div></div>
          <table className="data-table">
            <thead>
              <tr><th>Order ID</th><th>Customer</th><th>Artwork</th><th>Date</th><th>Amount</th><th>Status</th><th>Payment</th><th>Actions</th></tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order.id}>
                  <td>{order.id}</td>
                  <td><strong>{order.customer}</strong><p>{order.email}</p></td>
                  <td className="art-cell"><img className="thumb" src={order.image} alt={order.artwork} /><div><strong>{order.artwork}</strong><p>Oil on linen</p></div></td>
                  <td>{order.date}</td>
                  <td>{order.amount}</td>
                  <td><span className={`status ${order.status.toLowerCase()}`}>{order.status}</span></td>
                  <td>{order.payment}</td>
                  <td><div className="actions"><FiEye /><FiMoreVertical /></div></td>
                </tr>
              ))}
            </tbody>
          </table>
        </article>

        <aside className="card panel order-drawer">
          <h3>Order #ORD-1024</h3>
          <span className="status paid">Paid</span>
          <div className="detail-block"><h4>Customer</h4><p>Kwame Ndlovu</p><small>kwame.ndlovu@email.com</small></div>
          <div className="detail-block"><h4>Artwork</h4><div className="art-cell"><img className="thumb" src={orders[0].image} alt="Artwork" /><div><p>Echoes of Nyamirambo</p><small>130 × 95 cm</small></div></div></div>
          <div className="detail-block"><h4>Order Summary</h4><p>Artwork Price: $3,800</p><p>Shipping: $250</p><p>Tax (5%): $202.50</p><strong className="total">Total $4,252.50</strong></div>
          <div className="drawer-actions"><button className="btn btn-danger">Refund Order</button><button className="btn">Mark as Shipped</button></div>
        </aside>
      </div>
    </section>
  );
}