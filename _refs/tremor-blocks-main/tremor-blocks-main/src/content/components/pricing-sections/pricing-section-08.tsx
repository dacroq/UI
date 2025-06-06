'use client';

import React, { Fragment } from 'react';
import Link from 'next/link';
import {
  RiCheckLine,
  RiCloudLine,
  RiInformationLine,
  RiSubtractLine,
  RiUserLine,
} from '@remixicon/react';

import { cx } from '@/lib/utils';

import { Button } from '@/components/Button';
import { Label } from '@/components/Label';
import { Switch } from '@/components/Switch';
import { Tooltip } from '@/components/Tooltip';

type FixedPrice = string;

interface VariablePrice {
  monthly: string;
  annually: string;
}

interface Plan {
  name: string;
  price: FixedPrice | VariablePrice;
  description: string;
  capacity: string[];
  features: string[];
  isStarter: boolean;
  isRecommended: boolean;
  buttonText: string;
  buttonLink: string;
}

const plans: Plan[] = [
  {
    name: 'Starter',
    price: '$0',
    description:
      'For individuals and freelancers that need a scalable database.',
    capacity: ['Up to 5 users, 1 admin', '1 workspace'],
    features: [
      'Up to 1000/req. per day',
      '5 GB max storage',
      'Community Slack Support',
    ],
    isStarter: true,
    isRecommended: false,
    buttonText: 'Get started',
    buttonLink: '#',
  },
  {
    name: 'Teams',
    price: { monthly: '$49', annually: '$39' },
    description: 'For small teams and start-ups that need a scalable database.',
    capacity: ['Up to 100 users, 3 admins', 'Up to 20 workspaces'],
    features: [
      'Unlimited requests',
      '$0.07 per processed GB',
      '$0.34 per stored GB',
      'Slack Connect',
    ],
    isStarter: false,
    isRecommended: false,
    buttonText: 'Start 14-day trial',
    buttonLink: '#',
  },
  {
    name: 'Business',
    price: { monthly: '$99', annually: '$79' },
    description:
      'For larger teams that need more advanced controls and features.',
    capacity: ['Up to 500 users, 10 admins', 'Unlimited workspaces'],
    features: [
      'Unlimited requests',
      'Volume discount',
      '$0.03 per processed GB',
      '$0.1 per stored GB',
      'Single Sign-On (SSO)',
    ],
    isStarter: false,
    isRecommended: true,
    buttonText: 'Start 14-day trial',
    buttonLink: '#',
  },
];

interface Feature {
  name: string;
  plans: Record<string, boolean | string>;
  tooltip?: string;
}

interface Section {
  name: string;
  features: Feature[];
}

const sections: Section[] = [
  {
    name: 'Workspace Features',
    features: [
      {
        name: 'Email notifications & webhooks',
        tooltip:
          'Consectetur qui culpa ipsum in ea irure duis culpa incididunt.',
        plans: { Starter: true, Teams: true, Business: true },
      },
      {
        name: 'Workspaces',
        tooltip:
          'Consectetur qui culpa ipsum in ea irure duis culpa incididunt.',
        plans: { Starter: '5', Teams: '10', Business: 'Unlimited' },
      },
      {
        name: 'Storage',
        tooltip:
          'Consectetur qui culpa ipsum in ea irure duis culpa incididunt.',
        plans: {
          Starter: '$0.65 per stored GB',
          Teams: '$0.34 per stored GB',
          Business: 'Customized¹',
        },
      },
      {
        name: 'Seats',
        tooltip:
          'Consectetur qui culpa ipsum in ea irure duis culpa incididunt.',
        plans: {
          Starter: '5 users',
          Teams: 'Up to 20 users',
          Business: 'Unlimited',
        },
      },
    ],
  },
  {
    name: 'Automation',
    features: [
      {
        name: 'Service accounts',
        tooltip:
          'Consectetur qui culpa ipsum in ea irure duis culpa incididunt.',
        plans: { Starter: true, Teams: true, Business: true },
      },
      {
        name: 'Admin API',
        tooltip:
          'Consectetur qui culpa ipsum in ea irure duis culpa incididunt.',
        plans: { Teams: true, Business: true },
      },
      {
        name: 'No-Code workflow builder',
        tooltip:
          'Consectetur qui culpa ipsum in ea irure duis culpa incididunt.',
        plans: { Starter: 'Limited', Teams: 'Standard', Business: 'Enhanced' },
      },
    ],
  },
  {
    name: 'Analytics',
    features: [
      {
        name: 'Analytics retention',
        tooltip:
          'Consectetur qui culpa ipsum in ea irure duis culpa incididunt.',
        plans: { Starter: '7 days', Teams: '1 year', Business: 'Unlimited' },
      },
      {
        name: 'Anomaly detection',
        tooltip:
          'Consectetur qui culpa ipsum in ea irure duis culpa incididunt.',
        plans: { Teams: true, Business: true },
      },
      {
        name: 'Custom report builder',
        tooltip:
          'Consectetur qui culpa ipsum in ea irure duis culpa incididunt.',
        plans: { Business: true },
      },
    ],
  },
  {
    name: 'Support',
    features: [
      {
        name: 'Slack',
        plans: {
          Starter: 'Community',
          Teams: 'Connect',
          Business: 'Dedicated agent',
        },
      },
      {
        name: 'Email',
        plans: { Starter: '2-4 days', Teams: '1-2 days', Business: 'Priority' },
      },
    ],
  },
];

const isVariablePrice = (
  price: FixedPrice | VariablePrice,
): price is VariablePrice => {
  return (price as VariablePrice).monthly !== undefined;
};

export default function Example() {
  const [billingFrequency, setBillingFrequency] = React.useState<
    'monthly' | 'annually'
  >('monthly');
  return (
    <div className="obfuscate">
      <div className="py-20">
        <section aria-labelledby="pricing-title">
          <div className="w-fit rounded-lg px-2 py-1 shadow-md shadow-blue-400/30 ring-1 ring-black/5 dark:shadow-blue-600/30 dark:ring-white/5">
            <span className="text-sm font-medium tracking-tight text-gray-900 dark:text-gray-50">
              Pricing
            </span>
          </div>
          <h1 className="mt-2 inline-block bg-gradient-to-br from-gray-900 to-gray-800 bg-clip-text py-2 text-4xl font-bold tracking-tighter text-transparent dark:from-gray-50 dark:to-gray-300 sm:text-6xl md:text-6xl">
            Our plans scale with you
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-gray-700 dark:text-gray-400">
            Plans that empower you and your team to ship without friction. Our
            flexible pricing models ensure that efficiency doesn&rsquo;t come at
            the cost of your budget.
          </p>
        </section>
        <section
          id="pricing-overview"
          className="mt-20"
          aria-labelledby="pricing-overview"
        >
          <div className="flex items-center justify-center gap-2">
            <Label
              htmlFor="switch"
              className="text-base font-medium dark:text-gray-400 sm:text-sm"
            >
              Monthly
            </Label>
            <Switch
              id="switch"
              checked={billingFrequency === 'annually'}
              onCheckedChange={() =>
                setBillingFrequency(
                  billingFrequency === 'monthly' ? 'annually' : 'monthly',
                )
              }
            />
            <Label
              htmlFor="switch"
              className="text-base font-medium dark:text-gray-400 sm:text-sm"
            >
              Yearly (-20%)
            </Label>
          </div>
          <div className="grid grid-cols-1 gap-x-14 gap-y-8 lg:grid-cols-3">
            {plans.map((plan, planIdx) => (
              <div key={planIdx} className="mt-6">
                {plan.isRecommended ? (
                  <div className="flex h-4 items-center">
                    <div className="relative w-full">
                      <div
                        className="absolute inset-0 flex items-center"
                        aria-hidden="true"
                      >
                        <div className="w-full border-t border-blue-600 dark:border-blue-400" />
                      </div>
                      <div className="relative flex justify-center">
                        <span className="bg-white px-3 text-xs font-medium text-blue-600 dark:bg-gray-950 dark:text-blue-400">
                          Most popular
                        </span>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="flex h-4 items-center">
                    <div className="h-px w-full bg-gray-200 dark:bg-gray-800" />
                  </div>
                )}
                <div className="mx-auto max-w-md">
                  <h2 className="mt-6 text-sm font-semibold text-gray-900 dark:text-gray-50">
                    {plan.name}
                  </h2>
                  <div className="mt-3 flex items-center gap-x-3">
                    <span className="text-5xl font-semibold tabular-nums text-gray-900 dark:text-gray-50">
                      {isVariablePrice(plan.price)
                        ? billingFrequency === 'monthly'
                          ? plan.price.monthly
                          : plan.price.annually
                        : plan.price}
                    </span>
                    <div className="text-xs text-gray-600 dark:text-gray-400">
                      per user <br /> per month
                    </div>
                  </div>
                  <div className="mt-6 flex flex-col justify-between">
                    <p className="text-sm leading-6 text-gray-600 dark:text-gray-400">
                      {plan.description}
                    </p>
                    <div className="mt-6">
                      {plan.isStarter ? (
                        <Button variant="secondary" asChild className="group">
                          <Link href={plan.buttonLink}>{plan.buttonText}</Link>
                        </Button>
                      ) : (
                        <Button asChild className="group">
                          <Link href={plan.buttonLink}>{plan.buttonText}</Link>
                        </Button>
                      )}
                    </div>
                  </div>
                  <ul
                    role="list"
                    className="mt-8 text-sm text-gray-700 dark:text-gray-400"
                  >
                    {plan.capacity.map((feature, index) => (
                      <li
                        key={feature}
                        className="flex items-center gap-x-3 py-1.5"
                      >
                        {index === 0 && (
                          <RiUserLine
                            className="size-4 shrink-0 text-gray-500"
                            aria-hidden="true"
                          />
                        )}
                        {index === 1 && (
                          <RiCloudLine
                            className="size-4 shrink-0 text-gray-500"
                            aria-hidden="true"
                          />
                        )}
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <ul
                    role="list"
                    className="mt-4 text-sm text-gray-700 dark:text-gray-400"
                  >
                    {plan.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-x-3 py-1.5"
                      >
                        <RiCheckLine
                          className="size-4 shrink-0 text-blue-600 dark:text-blue-400"
                          aria-hidden="true"
                        />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* plan details (xs-lg)*/}
        <section
          id="pricing-details"
          className="mt-20 sm:mt-28"
          aria-labelledby="pricing-details"
        >
          <div className="mx-auto space-y-8 sm:max-w-md lg:hidden">
            {plans.map((plan) => (
              <div key={plan.name}>
                <div className="rounded-xl bg-gray-400/5 p-6 ring-1 ring-inset ring-gray-200 dark:ring-gray-800">
                  <h2
                    id={plan.name}
                    className="text-base font-semibold leading-6 text-gray-900 dark:text-gray-50"
                  >
                    {plan.name}
                  </h2>
                  <p className="text-sm font-normal text-gray-600 dark:text-gray-400">
                    {isVariablePrice(plan.price)
                      ? `${
                          billingFrequency === 'monthly'
                            ? plan.price.monthly
                            : plan.price.annually
                        } / per user`
                      : plan.price}
                  </p>
                </div>
                <ul
                  role="list"
                  className="mt-10 space-y-10 text-sm leading-6 text-gray-900 dark:text-gray-50"
                >
                  {sections.map((section) => (
                    <li key={section.name}>
                      <h3 className="font-semibold">{section.name}</h3>
                      <ul
                        role="list"
                        className="mt-2 divide-y divide-gray-200 dark:divide-gray-800"
                      >
                        {section.features.map((feature) =>
                          feature.plans[plan.name] ? (
                            <li
                              key={feature.name}
                              className="flex gap-x-3 py-2.5"
                            >
                              <RiCheckLine
                                className="size-5 flex-none text-blue-600 dark:text-blue-400"
                                aria-hidden="true"
                              />
                              <span>
                                {feature.name}{' '}
                                {typeof feature.plans[plan.name] ===
                                'string' ? (
                                  <span className="text-sm leading-6 text-gray-600 dark:text-gray-400">
                                    ({feature.plans[plan.name]})
                                  </span>
                                ) : null}
                              </span>
                            </li>
                          ) : null,
                        )}
                      </ul>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* plan details (lg+) */}
        <section className="mx-auto mt-14">
          <div className="mt-20 hidden sm:mt-20 lg:block">
            <div className="relative">
              <table className="w-full table-fixed border-separate border-spacing-0 text-left">
                <caption className="sr-only">Pricing plan comparison</caption>
                <colgroup>
                  <col className="w-2/5" />
                  <col className="w-1/5" />
                  <col className="w-1/5" />
                  <col className="w-1/5" />
                </colgroup>
                <thead className="">
                  <tr>
                    <th
                      scope="col"
                      className="border-b border-gray-100 bg-white pb-8 dark:border-gray-800 dark:bg-gray-950"
                    >
                      <div className="font-semibold leading-7 text-gray-900 dark:text-gray-50">
                        Compare prices
                      </div>
                      <div className="text-sm font-normal text-gray-600 dark:text-gray-400">
                        Price per month (billed yearly)
                      </div>
                    </th>
                    {plans.map((plan) => (
                      <th
                        key={plan.name}
                        scope="col"
                        className="border-b border-gray-100 bg-white px-6 pb-8 dark:border-gray-800 dark:bg-gray-950 lg:px-8"
                      >
                        <div
                          className={cx(
                            !plan.isStarter
                              ? 'text-blue-600 dark:text-blue-400'
                              : 'text-gray-900 dark:text-gray-50',
                            'font-semibold leading-7',
                          )}
                        >
                          {plan.name}
                        </div>
                        <div className="text-sm font-normal text-gray-600 dark:text-gray-400">
                          {isVariablePrice(plan.price)
                            ? `${
                                billingFrequency === 'monthly'
                                  ? plan.price.monthly
                                  : plan.price.annually
                              } / per user`
                            : plan.price}
                        </div>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {sections.map((section, sectionIdx) => (
                    <Fragment key={section.name}>
                      <tr>
                        <th
                          scope="colgroup"
                          colSpan={4}
                          className={cx(
                            sectionIdx === 0 ? 'pt-14' : 'pt-10',
                            'border-b border-gray-100 pb-4 text-base font-semibold leading-6 text-gray-900 dark:border-gray-800 dark:text-gray-50',
                          )}
                        >
                          {section.name}
                        </th>
                      </tr>
                      {section.features.map((feature) => (
                        <tr
                          key={feature.name}
                          className="transition hover:bg-blue-50/30 dark:hover:bg-blue-800/5"
                        >
                          <th
                            scope="row"
                            className="flex items-center gap-2 border-b border-gray-100 py-4 text-sm font-normal leading-6 text-gray-900 dark:border-gray-800 dark:text-gray-50"
                          >
                            <span>{feature.name}</span>
                            {feature.tooltip ? (
                              <Tooltip side="right" content={feature.tooltip}>
                                <RiInformationLine
                                  className="size-4 shrink-0 text-gray-700 dark:text-gray-400"
                                  aria-hidden="true"
                                />
                              </Tooltip>
                            ) : null}
                          </th>
                          {plans.map((plan) => (
                            <td
                              key={plan.name}
                              className="border-b border-gray-100 px-6 py-4 dark:border-gray-800 lg:px-8"
                            >
                              {typeof feature.plans[plan.name] === 'string' ? (
                                <div className="text-sm leading-6 text-gray-600 dark:text-gray-400">
                                  {feature.plans[plan.name]}
                                </div>
                              ) : (
                                <>
                                  {feature.plans[plan.name] === true ? (
                                    <RiCheckLine
                                      className="h-5 w-5 text-blue-600 dark:text-blue-400"
                                      aria-hidden="true"
                                    />
                                  ) : (
                                    <RiSubtractLine
                                      className="h-5 w-5 text-gray-400 dark:text-gray-600"
                                      aria-hidden="true"
                                    />
                                  )}

                                  <span className="sr-only">
                                    {feature.plans[plan.name] === true
                                      ? 'Included'
                                      : 'Not included'}{' '}
                                    in {plan.name}
                                  </span>
                                </>
                              )}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </Fragment>
                  ))}
                  <tr>
                    <th
                      scope="row"
                      className="pt-6 text-sm font-normal leading-6 text-gray-900 dark:text-gray-50"
                    >
                      <span className="sr-only">Link to activate plan</span>
                    </th>
                    {plans.map((plan) => (
                      <td key={plan.name} className="px-6 pt-6 lg:px-8">
                        {plan.isStarter ? (
                          <Button
                            variant="light"
                            asChild
                            className="group bg-transparent px-0 text-base hover:bg-transparent dark:bg-transparent hover:dark:bg-transparent"
                          >
                            <Link href={plan.buttonLink}>
                              {plan.buttonText}
                            </Link>
                          </Button>
                        ) : (
                          <Button
                            variant="light"
                            asChild
                            className="group bg-transparent px-0 text-base text-blue-600 hover:bg-transparent dark:bg-transparent dark:text-blue-400 hover:dark:bg-transparent"
                          >
                            <Link href={plan.buttonLink}>
                              {plan.buttonText}
                            </Link>
                          </Button>
                        )}
                      </td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
