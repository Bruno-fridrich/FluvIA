import { Home, Sprout, Droplet, User } from 'lucide-react';
import './TabBar.css';
import { useNavigate } from 'react-router-dom';

export default function TabBar() {
    const navigate = useNavigate();
  return (
    <div className="tab-bar">
      <button className="tab-button" onClick={() => navigate("/home")}><Home size={22} /></button>
      <button className="tab-button" onClick={() => navigate("/plantas")}><Sprout size={22} /></button>
      <button className="tab-button" onClick={() => navigate("/ia")}><Droplet size={22} /></button>
      <button className="tab-button" onClick={() => navigate("/user")}><User size={22} /></button>
    </div>
  );
}