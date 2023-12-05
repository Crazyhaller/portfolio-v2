'use client'

import React from 'react'
import SectionHeading from './sectionHeading'
import { motion } from 'framer-motion'
import { useSectionInView } from '@/lib/hooks'
import { sendEmail } from '@/actions/sendEmail'
import ContactBtn from './contactBtn'
import toast from 'react-hot-toast'

export default function Contact() {
  const { ref } = useSectionInView('Contact')

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="mb-20 sm:mb-28 w-[min(100%, 38rem)] text-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <SectionHeading>Contact Me</SectionHeading>

      <p className="text-slate-700 -mt-4 dark:text-white/80">
        Please contact me directly at{' '}
        <a className="underline" href="mailto:suvigyamadrid@gmail.com">
          suvigyamadrid@gmail.com
        </a>{' '}
        or through this form.
      </p>

      <form
        action={async (formData) => {
          const { data, error } = await sendEmail(formData)
          if (error) {
            toast.error(
              'There was an error sending your message. Please try again later.'
            )
          } else {
            toast.success('Your message has been sent!')
          }
        }}
        className="mt-10 flex flex-col dark:text-black"
      >
        <input
          className="h-14 rounded-lg px-4 borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          name="senderEmail"
          type="email"
          required
          maxLength={150}
          placeholder="Your Email"
        />
        <textarea
          className="h-52 my-3 rounded-lg borderBlack p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          name="message"
          required
          maxLength={5000}
          placeholder="Your Message"
        />
        <ContactBtn />
      </form>
    </motion.section>
  )
}
