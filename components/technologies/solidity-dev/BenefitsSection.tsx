'use client'

import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'
import Link from 'next/link'
import { Button } from '../../ui/button'

const benefits = [
	{
		title: 'Security-first development',
		description:
			'Solidity enables the creation of secure and tamper-proof smart contracts, ensuring your blockchain applications remain reliable and protected.',
	},
	{
		title: 'Decentralized innovation',
		description:
			'Solidity powers decentralized applications (dApps), giving you the tools to innovate in industries from finance to gaming.',
	},
	{
		title: 'Customizable solutions',
		description:
			'Create tailored blockchain solutions with Solidity’s flexibility, from unique token standards to business-specific workflows.',
	},
	{
		title: 'Efficient resource management',
		description:
			"Optimize your blockchain operations with Solidity's lightweight and efficient smart contracts, reducing costs and increasing performance.",
	},
	{
		title: 'Community-driven ecosystem',
		description:
			'Benefit from a vibrant developer community and extensive libraries that ensure continuous improvement and support for your projects.',
	},
	{
		title: 'Cross-industry applications',
		description:
			"Whether it's DeFi, gaming, or supply chain, Solidity provides the versatility to address a variety of business needs.",
	},
]

export default function BenefitsSection() {
	return (
		<section className='py-20 bg-background'>
			<div className='container px-4'>
				<div className='max-w-3xl mx-auto text-center mb-16'>
					<motion.h2
						initial={{ opacity: 0, x: -50 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.6, ease: 'easeOut' }}
						className='text-4xl font-bold mb-4'
					>
						Benefits of Solidity
					</motion.h2>
					<motion.p
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.3, duration: 0.5 }}
						className='text-lg text-muted-foreground'
					>
						Unlock blockchain`s full potential with CLIX`s Solidity solutions
						for secure, scalable, and innovative applications.
					</motion.p>
				</div>

				{/* cards */}
				<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
					{benefits.map((benefit, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: index * 0.1 }}
							className='relative p-6 bg-muted border border-border rounded-lg shadow-lg overflow-hidden group'
						>
							<div className='absolute top-0 left-0 w-full h-full bg-gradient-to-r from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500'></div>
							<h3 className='text-xl font-semibold mb-2 tracking-widest group-hover:text-transparent text-primary group-hover:bg-gradient-to-r group-hover:from-[#0e62e4] group-hover:via-[#7fb3ff] group-hover:to-[#0e62e4] group-hover:bg-[length:200%_auto] group-hover:bg-clip-text group-hover:transition-all group-hover:duration-500 group-hover:animate-gradient'>
								{benefit.title}
							</h3>
							<p className='text-muted-foreground'>{benefit.description}</p>
						</motion.div>
					))}
				</div>

				<motion.div
					initial={{ opacity: 0, x: -50 }}
					whileInView={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.6, ease: 'easeOut' }}
					className='flex justify-center mt-10'
				>
					<Button asChild>
						<Link href='/' className='flex items-center gap-2'>
							Contact Us <ExternalLink className='ml-2 h-4 w-4' />
						</Link>
					</Button>
				</motion.div>
			</div>
		</section>
	)
}