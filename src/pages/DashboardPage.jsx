import { FiArrowUpRight, FiExternalLink } from "react-icons/fi";
import { artworks, metricCards, orders } from "../data/mockData.js";

function MetricCard({ item }) {
  return (
    <article className="card metric-card">
      <p className="label">{item.label}</p>
      <h3>{item.value}</h3>
      <p className="delta">{item.delta} {item.detail}</p>
    </article>
  );
}

export default function DashboardPage() {
  return (
    <section className="page">
      <header className="page-header">
        <div>
          <h2>Welcome back, Denis</h2>
          <p>Here&apos;s what&apos;s happening with your gallery today.</p>
        </div>
        <div className="header-actions">
          <button className="btn btn-secondary">View Website <FiExternalLink /></button>
          <button className="btn btn-secondary">May 15 - Jun 15, 2024</button>
        </div>
      </header>

      <div className="metrics-grid">
        {metricCards.map((item) => (
          <MetricCard key={item.label} item={item} />
        ))}
      </div>

      <div className="dashboard-row">
        <article className="card panel sales-overview">
          <div className="panel-head"><h3>Sales Overview</h3><button className="chip">This Month</button></div>
          <div className="line-chart" />
        </article>
        <article className="card panel status-donut">
          <h3>Sales by Status</h3>
          <div className="donut-wrap">
            <div className="donut"><span>$24,780</span><small>Total</small></div>
            <ul>
              <li><span className="dot paid" /> Paid <b>$18,400 (74.2%)</b></li>
              <li><span className="dot pending" /> Pending <b>$4,780 (19.3%)</b></li>
              <li><span className="dot refunded" /> Refunded <b>$1,600 (6.5%)</b></li>
            </ul>
          </div>
        </article>
        <article className="card panel recent-orders">
          <div className="panel-head"><h3>Recent Orders</h3><a href="#">View all</a></div>
          {orders.slice(0, 4).map((order) => (
            <div key={order.id} className="compact-order">
              <img src={order.image} alt={order.artwork} />
              <div>
                <strong>{order.artwork}</strong>
                <p>{order.id} · {order.date}</p>
              </div>
              <b>{order.amount}</b>
            </div>
          ))}
        </article>
      </div>

      <div className="dashboard-row dashboard-bottom">
        <article className="card panel grow">
          <div className="panel-head"><h3>Manage Artworks</h3><button className="btn">+ Add New Artwork</button></div>
          <table className="data-table">
            <thead>
              <tr><th>Artwork</th><th>Title</th><th>Year</th><th>Medium</th><th>Dimensions</th><th>Status</th><th>Price</th><th>Actions</th></tr>
            </thead>
            <tbody>
              {artworks.slice(0, 5).map((art) => (
                <tr key={art.id}>
                  <td><img className="thumb" src={art.image} alt={art.title} /></td>
                  <td>{art.title}</td>
                  <td>{art.year}</td>
                  <td>{art.medium}</td>
                  <td>{art.size}</td>
                  <td><span className={`status ${art.status.toLowerCase()}`}>{art.status}</span></td>
                  <td>{art.price}</td>
                  <td><FiArrowUpRight /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </article>
        <aside className="dashboard-aside">
          <article className="card panel"><h3>Quick Actions</h3><ul className="quick-list"><li>Add New Artwork</li><li>Create New Exhibition</li><li>View Orders</li><li>Manage Inquiries</li></ul></article>
          <article className="card panel"><h3>Website Status</h3><p className="muted">Your website is live and accessible.</p><button className="btn btn-secondary full">View Website</button></article>
        </aside>
      </div>
    </section>
  );
}