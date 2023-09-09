"use client";
import { Fragment, useState } from "react";
import { Dialog, Disclosure, Popover, Transition } from "@headlessui/react";
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import {
  ChevronDownIcon,
  PhoneIcon,
  PlayCircleIcon,
} from "@heroicons/react/20/solid";
import Image from "next/image";
import Link from "next/link";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function AdminHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white/5">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Mk Timothy Company</span>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className="h-8 w-auto" src="/mkorange.png" alt="" />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <Popover.Group className="hidden lg:flex lg:gap-x-12">
          <Link
            href="/admin/dashboard"
            className="text-sm font-semibold leading-6 text-white hover:text-orange-500 transition-all duration-300 uppercase"
          >
            Home
          </Link>
          <Link
            href="/admin/users"
            className="text-sm font-semibold leading-6 text-white hover:text-orange-500 transition-all duration-300 uppercase"
          >
            Users
          </Link>
          <Link
            href="/admin/businesses"
            className="text-sm font-semibold leading-6 text-white hover:text-orange-500 transition-all duration-300 uppercase"
          >
            Businesses
          </Link>
          <Link
            href="/admin/queries"
            className="text-sm font-semibold leading-6 text-white hover:text-orange-500 transition-all duration-300 uppercase"
          >
            Queries
          </Link>
        </Popover.Group>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link
            href={"/login"}
            className="text-orange-500 border-2 border-orange-500 hover:bg-orange-500 hover:text-white transition-all duration-300 px-2 py-1 rounded-md mx-2 inline-flex items-center md:mb-2 lg:mb-0 text-xs"
          >
            Log in
          </Link>
          <Link
            href={"/logout"}
            className="text-orange-500 border-2 border-orange-500 hover:bg-orange-500 hover:text-white transition-all duration-300 px-2 py-1 rounded-md mx-2 inline-flex items-center md:mb-2 lg:mb-0 text-xs"
          >
            Log out
          </Link>
        </div>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-black px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Mk Timothy Company</span>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img className="h-8 w-auto" src="/mkorange.png" alt="" />
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-white"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Link
                  href="/admin/dashboard"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-white/5"
                >
                  Home
                </Link>
                <Link
                  href="/admin/users"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-white/5"
                >
                  Users
                </Link>
                <Link
                  href="/admin/businesses"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-white/5"
                >
                  Businesses
                </Link>
                <Link
                  href="/admin/queries"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-white/5"
                >
                  Queries
                </Link>
              </div>
              <div className="py-6">
                <Link
                  href="/login"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-white hover:bg-white/5"
                >
                  Log in
                </Link>
                <button className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-white hover:bg-white/5">
                  Log out
                </button>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
