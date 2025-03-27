import React from "react";

const Resume = () => {
  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-4xl font-bold text-center">Walmsley Jade Robert</h1>
      <p className="text-center text-gray-600">Burnie, Australia</p>
      <p className="text-center text-gray-600">
        Email: [Your Email] | LinkedIn: [Your LinkedIn] | GitHub: [Your GitHub] | Portfolio: [Your Portfolio]
      </p>
      <p className="text-center text-gray-600">Phone: [Your Phone Number]</p>
      
      <h2 className="text-2xl font-bold mt-8">Professional Summary</h2>
      <p className="text-gray-700">
        Experienced Lead Blockchain Engineer with a passion for developing cutting-edge decentralized solutions. Over 8 years of expertise in blockchain architecture, smart contract development, and decentralized applications (dApps). Adept at optimizing security, scalability, and performance while leading development teams to success. Extensive experience in DeFi, Layer-2 solutions, and enterprise blockchain integrations. Committed to driving blockchain innovation and fostering industry growth.
      </p>
      
      <h2 className="text-2xl font-bold mt-8">Education</h2>
      <p className="font-semibold">University of Tasmania</p>
      <p>Bachelor of Computer Science (2011 – 2014)</p>
      <p>Bachelor of Arts (2004 – 2007)</p>
      
      <h2 className="text-2xl font-bold mt-8">Work Experience</h2>
      <div className="mt-4">
        <h3 className="font-semibold">CorePlan Company — Lead Blockchain Engineer</h3>
        <p className="text-gray-600">May 2023 – January 2025</p>
        <ul className="list-disc pl-5 text-gray-700">
          <li>Led a 12-member team to develop a decentralized supply chain transparency solution using Ethereum and Hyperledger Fabric.</li>
          <li>Designed Ethereum-based smart contracts, reducing fraud by 35% and improving efficiency by 40%.</li>
          <li>Implemented Layer-2 scaling with Chainlink oracles, cutting transaction costs by $500K annually.</li>
          <li>Managed a multi-million-dollar blockchain project focused on dispute resolution and logistics tracking.</li>
          <li>Mentored junior engineers in smart contract security, gas optimization, and decentralized identity.</li>
          <li>Organized blockchain workshops and knowledge-sharing sessions within the company.</li>
        </ul>
      </div>
      <div className="mt-4">
        <h3 className="font-semibold">TechBloc Solutions — Blockchain Engineer</h3>
        <p className="text-gray-600">February 2021 – March 2023</p>
        <ul className="list-disc pl-5 text-gray-700">
          <li>Developed and launched a DeFi platform with staking, liquidity pools, and governance tokens, reaching $10M liquidity in 6 months.</li>
          <li>Optimized Solidity smart contracts using OpenZeppelin, ensuring 99.99% uptime and robust security.</li>
          <li>Implemented decentralized governance mechanisms, enhancing protocol transparency.</li>
          <li>Integrated Layer-2 scaling (Optimism) to reduce gas fees and boost transaction throughput by 50%.</li>
          <li>Researched blockchain scalability, contributing to a white paper on Layer-2 DeFi solutions.</li>
          <li>Advised clients on blockchain security, compliance, and enterprise integration.</li>
        </ul>
      </div>
      <div className="mt-4">
        <h3 className="font-semibold">BlockForge Systems — Blockchain Engineer</h3>
        <p className="text-gray-600">July 2017 – December 2020</p>
        <ul className="list-disc pl-5 text-gray-700">
          <li>Developed a permissioned blockchain network using Hyperledger Fabric for a global retailer’s supply chain management.</li>
          <li>Implemented smart contracts for logistics and payments, increasing operational efficiency by 20%.</li>
          <li>Integrated blockchain APIs with enterprise resource planning (ERP) systems for seamless data flow.</li>
          <li>Enhanced supply chain tracking by integrating IoT sensors with blockchain technology.</li>
          <li>Educated stakeholders on blockchain applications, presenting use cases for business improvement.</li>
        </ul>
      </div>
      <div className="mt-4">
        <h3 className="font-semibold">ChainLink Technologies — Blockchain Engineer</h3>
        <p className="text-gray-600">January 2014 – April 2017</p>
        <ul className="list-disc pl-5 text-gray-700">
          <li>Developed blockchain solutions for B2B financial transactions and real estate title transfers.</li>
          <li>Created a decentralized identity verification platform to enhance data privacy and security.</li>
          <li>Implemented smart contracts for real estate transactions, automating payments and title transfers.</li>
          <li>Contributed to the development of a decentralized file storage system using IPFS and blockchain.</li>
          <li>Integrated blockchain with IoT solutions to improve industrial data integrity.</li>
        </ul>
      </div>
      <h2 className="text-2xl font-bold mt-8">Skills</h2>
      <ul className="list-disc pl-5 text-gray-700">
        <li>Blockchain Platforms: Ethereum, Solana, Polkadot, Hyperledger Fabric</li>
        <li>Smart Contracts: Solidity, Vyper, OpenZeppelin</li>
        <li>DeFi, Tokenomics, and Staking</li>
        <li>Layer-2 Scaling (Optimism, Arbitrum)</li>
        <li>Security Audits & Best Practices</li>
        <li>dApp Development & Web3 Integration</li>
        <li>Cryptography & Data Privacy</li>
        <li>IoT & Blockchain Integration</li>
        <li>Agile Development, Team Leadership</li>
      </ul>
      
      <h2 className="text-2xl font-bold mt-8">Certifications</h2>
      <p>Certified Blockchain Developer – [Certification Body]</p>
      <p>[Additional Certification]</p>
      
      <h2 className="text-2xl font-bold mt-8">Projects</h2>
      <p className="font-semibold">SupplyChainX</p>
      <p>Engineered a blockchain-powered supply chain solution using Ethereum and Hyperledger Fabric, reducing fraud and improving efficiency by 35%.</p>
      <p className="font-semibold">DeFi Protocol</p>
      <p>Built a decentralized finance protocol with staking and governance mechanisms, achieving over $10M liquidity within 6 months.</p>
    </div>
  );
};

export default Resume;
