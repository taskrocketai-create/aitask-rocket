/**
 * Auto-generated entity types
 * Contains all CMS collection interfaces in a single file 
 */

/**
 * Collection ID: benefits
 * Interface for Benefits
 */
export interface Benefits {
  _id: string;
  _createdDate?: Date;
  _updatedDate?: Date;
  /** @wixFieldType text */
  title?: string;
  /** @wixFieldType text */
  description?: string;
  /** @wixFieldType image - Contains image URL, render with <Image> component, NOT as text */
  visualAsset?: string;
  /** @wixFieldType number */
  displayOrder?: number;
  /** @wixFieldType url */
  relatedPageUrl?: string;
}


/**
 * Collection ID: clientsubscriptions
 * Interface for ClientSubscriptions
 */
export interface ClientSubscriptions {
  _id: string;
  _createdDate?: Date;
  _updatedDate?: Date;
  /** @wixFieldType text */
  planName?: string;
  /** @wixFieldType text */
  subscriptionStatus?: string;
  /** @wixFieldType date */
  nextBillingDate?: Date | string;
  /** @wixFieldType number */
  tasksRemaining?: number;
  /** @wixFieldType date */
  subscriptionStartDate?: Date | string;
  /** @wixFieldType number */
  monthlyCost?: number;
}


/**
 * Collection ID: clienttasks
 * Interface for ClientTasks
 */
export interface ClientTasks {
  _id: string;
  _createdDate?: Date;
  _updatedDate?: Date;
  /** @wixFieldType text */
  taskTitle?: string;
  /** @wixFieldType text */
  taskType?: string;
  /** @wixFieldType text */
  taskDescription?: string;
  /** @wixFieldType text */
  taskStatus?: string;
  /** @wixFieldType url */
  clientUploadedFiles?: string;
  /** @wixFieldType url */
  taskDeliverables?: string;
  /** @wixFieldType datetime */
  submissionDateTime?: Date | string;
  /** @wixFieldType datetime */
  completionDateTime?: Date | string;
}


/**
 * Collection ID: howitworks
 * Interface for HowItWorks
 */
export interface HowItWorks {
  _id: string;
  _createdDate?: Date;
  _updatedDate?: Date;
  /** @wixFieldType text */
  title?: string;
  /** @wixFieldType text */
  description?: string;
  /** @wixFieldType number */
  order?: number;
  /** @wixFieldType image - Contains image URL, render with <Image> component, NOT as text */
  stepImage?: string;
  /** @wixFieldType text */
  ctaText?: string;
  /** @wixFieldType url */
  ctaUrl?: string;
}


/**
 * Collection ID: pricingtiers
 * Interface for PricingTiers
 */
export interface PricingTiers {
  _id: string;
  _createdDate?: Date;
  _updatedDate?: Date;
  /** @wixFieldType text */
  planName?: string;
  /** @wixFieldType number */
  monthlyPrice?: number;
  /** @wixFieldType text */
  description?: string;
  /** @wixFieldType number */
  maxTasks?: number;
  /** @wixFieldType boolean */
  unlimitedRevisions?: boolean;
  /** @wixFieldType boolean */
  priorityTurnaround?: boolean;
  /** @wixFieldType number */
  overageCostPerTask?: number;
  /** @wixFieldType text */
  ctaButtonText?: string;
  /** @wixFieldType url */
  ctaButtonLink?: string;
}


/**
 * Collection ID: services
 * Interface for Services
 */
export interface Services {
  _id: string;
  _createdDate?: Date;
  _updatedDate?: Date;
  /** @wixFieldType text */
  serviceName?: string;
  /** @wixFieldType text */
  description?: string;
  /** @wixFieldType image - Contains image URL, render with <Image> component, NOT as text */
  serviceImage?: string;
  /** @wixFieldType text */
  tagline?: string;
  /** @wixFieldType text */
  deliveryTime?: string;
  /** @wixFieldType text */
  callToActionText?: string;
}


/**
 * Collection ID: testimonials
 * Interface for Testimonials
 */
export interface Testimonials {
  _id: string;
  _createdDate?: Date;
  _updatedDate?: Date;
  /** @wixFieldType text */
  clientName?: string;
  /** @wixFieldType text */
  quote?: string;
  /** @wixFieldType text */
  clientCompanyRole?: string;
  /** @wixFieldType image - Contains image URL, render with <Image> component, NOT as text */
  clientImage?: string;
  /** @wixFieldType number */
  rating?: number;
}
