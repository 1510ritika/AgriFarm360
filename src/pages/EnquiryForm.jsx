import { useForm } from 'react-hook-form'

export default function EnquiryForm() {
  const { register, handleSubmit, reset, formState: { errors } } = useForm()

  const whatsappNumber = '918073684699' // Your WhatsApp number

  const onSubmit = (data) => {
    const message = `Hello! I am interested in your products.%0A` +
      `Name: ${data.name}%0A` +
      `Phone: ${data.phone}%0A` +
      `Product: ${data.product}%0A` +
      `City: ${data.city}%0A` +
      `Country: ${data.country}%0A` +
      (data.message ? `Message: ${data.message}` : '')

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`
    window.open(whatsappUrl, '_blank')
    reset()
  }

  return (
    <section className="container-max py-10">
      <h1 className="text-3xl font-bold mb-6">Enquiry Form</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="card mt-6 grid md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium">Full Name</label>
          <input
            className="w-full border rounded-xl p-3"
            {...register('name', { required: true })}
          />
          {errors.name && <p className="text-red-600 text-xs mt-1">Required</p>}
        </div>

        <div>
          <label className="block text-sm font-medium">Phone Number</label>
          <input
            className="w-full border rounded-xl p-3"
            {...register('phone', { required: true })}
          />
          {errors.phone && <p className="text-red-600 text-xs mt-1">Required</p>}
        </div>

        <div>
          <label className="block text-sm font-medium">Product you are interested in</label>
          <input
            className="w-full border rounded-xl p-3"
            {...register('product', { required: true })}
            placeholder="e.g., Goats, Jaggery, Chaffcutter"
          />
          {errors.product && <p className="text-red-600 text-xs mt-1">Required</p>}
        </div>

        <div>
          <label className="block text-sm font-medium">City</label>
          <input
            className="w-full border rounded-xl p-3"
            {...register('city', { required: true })}
          />
          {errors.city && <p className="text-red-600 text-xs mt-1">Required</p>}
        </div>

        <div>
          <label className="block text-sm font-medium">Country</label>
          <input
            className="w-full border rounded-xl p-3"
            {...register('country', { required: true })}
          />
          {errors.country && <p className="text-red-600 text-xs mt-1">Required</p>}
        </div>

        <div className="md:col-span-2">
          <label className="block text-sm font-medium">Message (Optional)</label>
          <textarea
            className="w-full border rounded-xl p-3"
            rows={4}
            {...register('message')}
          />
        </div>

        <div className="md:col-span-2">
          <button type="submit" className="btn-primary w-full py-3">
            Send Enquiry
          </button>
        </div>
      </form>
    </section>
  )
}
