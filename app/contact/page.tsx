'use client'

import { Card } from '@/components/ui/card'
import { useToast } from '@/hooks/use-toast'
import { motion } from 'framer-motion'
import { Mail, MapPin, Phone } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function ContactPage() {
	const { toast } = useToast()

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault()
		toast({
			title: 'Message sent',
			description: "We'll get back to you as soon as possible.",
		})
	}

	return (
		<motion.div
			className='min-h-screen pt-24 pb-16'
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 0.5 }}
		>
			<div className='container px-4'>
				<div className='max-w-3xl mx-auto text-center mb-16 relative'>
					{/* gradient line */}
					<motion.div
						initial={{ opacity: 0, y: 40 }}
						animate={{ opacity: 1, y: -40 }}
						transition={{ duration: 0.8, ease: 'easeOut' }}
						className='absolute right-64 top-0 transform -translate-y-1/2 bg-gradient-to-r from-blue-600 via-cyan-400 to-pink-500 bg-[length:200%_200%] animate-gradientFlow w-16 h-24 -z-10'
					/>
					<motion.h1
						className='text-4xl font-bold mb-4'
						initial={{ y: -50, opacity: 0 }}
						animate={{ y: 0, opacity: 1 }}
						transition={{ duration: 0.5 }}
					>
						Contact Us
					</motion.h1>
					<motion.p
						className='text-xl text-muted-foreground'
						initial={{ y: 50, opacity: 0 }}
						animate={{ y: 0, opacity: 1 }}
						transition={{ duration: 0.5 }}
					>
						Get in touch with us to discuss your project
					</motion.p>
				</div>

				<motion.div
					className='grid md:grid-cols-2 gap-8 max-w-5xl mx-auto'
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 0.3, duration: 0.5 }}
				>
					<div className='relative w-full h-full aspect-square'>
						<Image
							src='/images/san-francisco.jpg'
							alt='earth'
							fill
							className='object-cover object-top brightness-50 rounded-2xl drop-shadow-xl'
						/>
					</div>

					<div className='flex flex-col justify-center gap-8'>
						<Card className='p-6'>
							<Link
								href='mailto:info@clix.com'
								target='_blank'
								rel='noopener nofollow noreferrer'
								className='flex items-start gap-4'
							>
								<Mail className='h-6 w-6 text-primary' />
								<div>
									<h3 className='font-semibold mb-2'>Email Us</h3>
									<p className='text-muted-foreground'>info@clix.com</p>
								</div>
							</Link>
						</Card>

						<Card className='p-6'>
							<Link
								href='tel:+15551234567'
								target='_blank'
								className='flex items-start gap-4'
							>
								<Phone className='h-6 w-6 text-primary' />
								<div>
									<h3 className='font-semibold mb-2'>Call Us</h3>
									<p className='text-muted-foreground'>+1 (555) 123-4567</p>
								</div>
							</Link>
						</Card>

						<Card className='p-6'>
							<Link
								href='https://maps.app.goo.gl/kni6RUzhhKsxhX5D8'
								target='_blank'
								className='flex items-start gap-4'
							>
								<MapPin className='h-6 w-6 text-primary' />
								<div>
									<h3 className='font-semibold mb-2'>Visit Us</h3>
									<p className='text-muted-foreground'>
										123 Tech Street
										<br />
										Silicon Valley, CA 94025
									</p>
								</div>
							</Link>
						</Card>
					</div>
				</motion.div>
			</div>
		</motion.div>
	)
}
