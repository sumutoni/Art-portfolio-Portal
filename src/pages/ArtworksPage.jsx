import { FiMoreVertical, FiSearch } from "react-icons/fi";
import { artworks } from "../data/mockData.js";

export default function ArtworksPage() {
  return (
    <section className="page artworks-page">
      <div className="split-layout">
        <article className="card panel table-panel grow">
          <header className="page-header compact">
            <div>
              <h2>Manage Artworks</h2>
              <p>Add, edit or remove artworks from your gallery.</p>
            </div>
            <div className="header-actions">
              <button className="btn btn-secondary">Import Artworks</button>
              <button className="btn">+ Add New Artwork</button>
            </div>
          </header>
          <div className="panel-head controls"><div className="tabs"><span className="active">All (28)</span><span>Available (24)</span><span>Sold (4)</span></div><div className="header-actions"><button className="btn btn-secondary">Filter by status</button><button className="btn btn-secondary">Filter by category</button><button className="btn btn-secondary"><FiSearch /> Search artworks...</button></div></div>
          <table className="data-table">
            <thead>
              <tr><th>Artwork</th><th>Title</th><th>Year</th><th>Medium</th><th>Dimensions</th><th>Status</th><th>Price</th><th>Actions</th></tr>
            </thead>
            <tbody>
              {artworks.map((art) => (
                <tr key={art.id}>
                  <td><img className="thumb" src={art.image} alt={art.title} /></td>
                  <td>{art.title}</td>
                  <td>{art.year}</td>
                  <td>{art.medium}</td>
                  <td>{art.size}</td>
                  <td><span className={`status ${art.status.toLowerCase()}`}>{art.status}</span></td>
                  <td>{art.price}</td>
                  <td><FiMoreVertical /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </article>

        <aside className="card panel form-panel">
          <h3>Add New Artwork</h3>
          <p className="muted">Fill in details below to add a new artwork.</p>
          <div className="upload-grid"><div className="upload-main">Upload images</div><div className="upload-slot" /><div className="upload-slot" /><div className="upload-slot" /></div>
          <div className="form-grid">
            <label>Title<input placeholder="Enter artwork title" /></label>
            <label>Year<input placeholder="eg. 2024" /></label>
            <label>Category<input placeholder="Select category" /></label>
            <label>Medium<input placeholder="eg. Oil on linen" /></label>
            <label>Dimensions<input placeholder="Width x Height" /></label>
            <label>Price (USD)<input placeholder="eg. 3500" /></label>
          </div>
          <label>Description<textarea rows="6" placeholder="Write a description about the artwork..." /></label>
          <div className="drawer-actions"><button className="btn btn-secondary">Cancel</button><button className="btn">Save Artwork</button></div>
        </aside>
      </div>
    </section>
  );
}