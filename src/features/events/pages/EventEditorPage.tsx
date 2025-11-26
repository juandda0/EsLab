import React, { useState, useEffect } from "react";
import { useEventContext } from "../context/EventContext";
import type { EventData } from "../context/EventContext";
import { useNavigate } from "react-router-dom";
import { Save, Plus, Trash2, ArrowLeft, Eye, EyeOff, Image as ImageIcon, Link as LinkIcon } from "lucide-react";

const EventEditorPage: React.FC = () => {
  const { eventData, updateEventData } = useEventContext();
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState<EventData>(eventData);

  useEffect(() => {
    setFormData(eventData);
  }, [eventData]);

  const handleSave = () => {
    updateEventData(formData);
    alert("¡Evento actualizado correctamente!");
    navigate("/eventos");
  };

  // Helpers generales
  const updateSection = (section: keyof EventData, field: string, value: any) => {
    setFormData(prev => ({
      ...prev,
      [section]: { ...prev[section], [field]: value }
    }));
  };

  // Helper para listas simples (Fechas, Agenda)
  const handleArrayChange = (section: 'dates' | 'agenda', index: number, field: string, value: string) => {
    const newItems = [...formData[section].items];
    (newItems[index] as any)[field] = value;
    setFormData(prev => ({
      ...prev,
      [section]: { ...prev[section], items: newItems }
    }));
  };

  // Helper específico para Descargas (dentro de About)
  const handleDownloadChange = (index: number, field: 'label' | 'url', value: string) => {
    const newDownloads = [...formData.about.downloads];
    newDownloads[index][field] = value;
    setFormData(prev => ({
      ...prev,
      about: { ...prev.about, downloads: newDownloads }
    }));
  };

  const addDownload = () => {
    setFormData(prev => ({
      ...prev,
      about: { ...prev.about, downloads: [...prev.about.downloads, { label: "Nuevo Archivo", url: "#" }] }
    }));
  };

  const removeDownload = (index: number) => {
    setFormData(prev => ({
      ...prev,
      about: { ...prev.about, downloads: prev.about.downloads.filter((_, i) => i !== index) }
    }));
  };

  // Helper para Galería (Imágenes)
  const handleGalleryChange = (index: number, value: string) => {
    const newGallery = [...formData.oral.gallery];
    newGallery[index] = value;
    setFormData(prev => ({
      ...prev,
      oral: { ...prev.oral, gallery: newGallery }
    }));
  };

  // Helpers de Agregar/Quitar genéricos
  const addItem = (section: 'dates' | 'agenda') => {
    const newItem = section === 'dates' 
      ? { label: "Nueva Fecha", value: "Pendiente" } 
      : { date: "Fecha", title: "Actividad" };
    // @ts-ignore
    setFormData(prev => ({...prev, [section]: { ...prev[section], items: [...prev[section].items, newItem] }}));
  };

  const removeItem = (section: 'dates' | 'agenda', index: number) => {
    setFormData(prev => ({
      ...prev,
      [section]: { ...prev[section], items: prev[section].items.filter((_, i) => i !== index) }
    }));
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="max-w-5xl mx-auto">
        
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <button onClick={() => navigate("/eventos")} className="flex items-center text-gray-600 hover:text-black">
            <ArrowLeft className="mr-2" /> Volver al evento
          </button>
          <h1 className="text-3xl font-bold text-gray-800">Editor de Evento</h1>
          <button 
            onClick={handleSave}
            className="bg-green-600 text-white px-6 py-3 rounded-lg shadow hover:bg-green-700 flex items-center gap-2"
          >
            <Save size={20} /> Guardar Cambios
          </button>
        </div>

        {/* --- Sección: Información General (About) y Descargas --- */}
        <SectionCard 
          title="Información General y Descargas" 
          isVisible={formData.about.visible}
          onToggle={() => updateSection('about', 'visible', !formData.about.visible)}
        >
          <div className="space-y-6">
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Título del Evento</label>
                <input 
                  type="text" 
                  value={formData.about.title}
                  onChange={(e) => updateSection('about', 'title', e.target.value)}
                  className="w-full p-2 border rounded mt-1"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Descripción</label>
                <textarea 
                  rows={4}
                  value={formData.about.description}
                  onChange={(e) => updateSection('about', 'description', e.target.value)}
                  className="w-full p-2 border rounded mt-1"
                />
              </div>
            </div>

            <div className="bg-gray-50 p-4 rounded border border-gray-200">
              <h4 className="font-semibold text-gray-700 mb-3 flex items-center gap-2">
                <LinkIcon size={16}/> Archivos Descargables
              </h4>
              {formData.about.downloads.map((item, idx) => (
                <div key={idx} className="flex gap-4 mb-3 items-center">
                  <input 
                    className="flex-1 p-2 border rounded" 
                    value={item.label} 
                    placeholder="Nombre del botón"
                    onChange={(e) => handleDownloadChange(idx, 'label', e.target.value)}
                  />
                  <input 
                    className="flex-1 p-2 border rounded text-gray-500 text-sm" 
                    value={item.url} 
                    placeholder="URL del archivo"
                    onChange={(e) => handleDownloadChange(idx, 'url', e.target.value)}
                  />
                  <button onClick={() => removeDownload(idx)} className="text-red-500 hover:text-red-700">
                    <Trash2 size={18} />
                  </button>
                </div>
              ))}
              <button onClick={addDownload} className="text-green-600 text-sm font-semibold flex items-center gap-1 mt-2">
                <Plus size={16} /> Agregar Descarga
              </button>
            </div>
          </div>
        </SectionCard>

        {/* --- Sección: Fechas Importantes --- */}
        <SectionCard 
          title="Fechas Importantes" 
          isVisible={formData.dates.visible}
          onToggle={() => updateSection('dates', 'visible', !formData.dates.visible)}
        >
          {formData.dates.items.map((item, idx) => (
            <div key={idx} className="flex gap-4 mb-3 items-center">
              <input 
                className="flex-1 p-2 border rounded" 
                value={item.label} 
                onChange={(e) => handleArrayChange('dates', idx, 'label', e.target.value)}
              />
              <input 
                className="flex-1 p-2 border rounded" 
                value={item.value} 
                onChange={(e) => handleArrayChange('dates', idx, 'value', e.target.value)}
              />
              <button onClick={() => removeItem('dates', idx)} className="text-red-500 hover:text-red-700">
                <Trash2 size={18} />
              </button>
            </div>
          ))}
          <button onClick={() => addItem('dates')} className="text-green-600 text-sm font-semibold flex items-center gap-1 mt-2">
            <Plus size={16} /> Agregar Fecha
          </button>
        </SectionCard>

        {/* --- Sección: Agenda --- */}
        <SectionCard 
          title="Agenda del Evento" 
          isVisible={formData.agenda.visible}
          onToggle={() => updateSection('agenda', 'visible', !formData.agenda.visible)}
        >
          {formData.agenda.items.map((item, idx) => (
            <div key={idx} className="flex gap-4 mb-3 items-center">
              <input 
                className="w-1/4 p-2 border rounded" 
                value={item.date} 
                onChange={(e) => handleArrayChange('agenda', idx, 'date', e.target.value)}
              />
              <input 
                className="flex-1 p-2 border rounded" 
                value={item.title} 
                onChange={(e) => handleArrayChange('agenda', idx, 'title', e.target.value)}
              />
              <button onClick={() => removeItem('agenda', idx)} className="text-red-500 hover:text-red-700">
                <Trash2 size={18} />
              </button>
            </div>
          ))}
          <button onClick={() => addItem('agenda')} className="text-green-600 text-sm font-semibold flex items-center gap-1 mt-2">
            <Plus size={16} /> Agregar Actividad
          </button>
        </SectionCard>

        {/* --- Sección: Oral Presentation & Galería --- */}
        <SectionCard 
          title="Presentación Oral y Galería" 
          isVisible={formData.oral.visible}
          onToggle={() => updateSection('oral', 'visible', !formData.oral.visible)}
        >
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">Instrucciones (Texto)</label>
              <textarea 
                rows={4}
                value={formData.oral.content}
                onChange={(e) => updateSection('oral', 'content', e.target.value)}
                className="w-full p-2 border rounded mt-1"
              />
            </div>

            <div className="bg-gray-50 p-4 rounded border border-gray-200">
              <h4 className="font-semibold text-gray-700 mb-3 flex items-center gap-2">
                <ImageIcon size={16}/> Galería de Imágenes (URLs)
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {formData.oral.gallery.map((url, idx) => (
                  <div key={idx}>
                    <label className="text-xs text-gray-500 mb-1 block">Imagen {idx + 1}</label>
                    <div className="flex gap-2">
                        <input 
                            className="flex-1 p-2 border rounded text-xs"
                            value={url}
                            onChange={(e) => handleGalleryChange(idx, e.target.value)}
                            placeholder="https://..."
                        />
                        <div className="w-10 h-10 bg-gray-200 rounded overflow-hidden flex-shrink-0">
                            {url ? <img src={url} alt="Preview" className="w-full h-full object-cover"/> : null}
                        </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </SectionCard>

      </div>
    </div>
  );
};

const SectionCard: React.FC<{title: string, isVisible: boolean, onToggle: () => void, children: React.ReactNode}> = ({ title, isVisible, onToggle, children }) => (
  <div className={`bg-white rounded-lg shadow mb-6 overflow-hidden border ${isVisible ? 'border-gray-200' : 'border-gray-300 opacity-75'}`}>
    <div className="bg-gray-50 px-6 py-4 border-b flex justify-between items-center">
      <h3 className="font-bold text-lg text-gray-800">{title}</h3>
      <button 
        onClick={onToggle}
        className={`flex items-center gap-2 px-3 py-1 rounded text-sm font-medium ${isVisible ? 'bg-green-100 text-green-800' : 'bg-gray-200 text-gray-600'}`}
      >
        {isVisible ? <><Eye size={16}/> Visible</> : <><EyeOff size={16}/> Oculto</>}
      </button>
    </div>
    {isVisible && <div className="p-6">{children}</div>}
  </div>
);

export default EventEditorPage;