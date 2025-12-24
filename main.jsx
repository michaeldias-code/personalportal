import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import { User, Code, ChevronRight } from 'lucide-react'
import './index.css'

function App() {
  return (
    <div className="min-h-screen bg-slate-50 p-8 flex flex-col items-center">
      <header className="text-center mb-10">
        <div className="w-24 h-24 bg-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center text-white font-bold">
          FOTO
        </div>
        <h1 className="text-3xl font-bold text-slate-900">Meu Portal React</h1>
        <p className="text-slate-500">O mínimo para funcionar</p>
      </header>

      <div className="grid gap-4 w-full max-w-md">
        <button className="flex items-center justify-between p-4 bg-white rounded-xl shadow-sm border border-slate-200 hover:border-blue-500 transition-all">
          <div className="flex items-center gap-3">
            <User className="text-blue-600" />
            <span className="font-medium text-slate-700">Sobre Mim</span>
          </div>
          <ChevronRight className="text-slate-400" size={18} />
        </button>
      </div>
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
